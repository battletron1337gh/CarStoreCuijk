<?php
// SMTP Email API for Car Store Cuijk
// Supports multiple form types: interesse, contact, inruil, onderhoud, financiering
//
// Credentials are loaded from config.php (server only, not committed).
// For local development, copy config.example.php to config.php and fill in your keys.

$config_path = __DIR__ . '/config.php';
$config = file_exists($config_path) ? require $config_path : [];

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
if (!$data || empty($data['naam']) || empty($data['email']) || empty($data['telefoon'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Naam, email en telefoon zijn verplicht']);
    exit();
}

// hCaptcha verification (required)
if (empty($data['hcaptcha_token'])) {
    http_response_code(400);
    echo json_encode(['error' => 'hCaptcha token is required']);
    exit();
}

$hcaptcha_secret = $config['hcaptcha_secret'] ?? '';
if (empty($hcaptcha_secret)) {
    http_response_code(500);
    echo json_encode(['error' => 'hCaptcha secret not configured']);
    exit();
}
$hcaptcha_response = file_get_contents('https://api.hcaptcha.com/siteverify', false, stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => 'Content-Type: application/x-www-form-urlencoded',
        'content' => http_build_query([
            'secret' => $hcaptcha_secret,
            'response' => $data['hcaptcha_token'],
        ]),
    ],
]));

$hcaptcha_result = json_decode($hcaptcha_response, true);
if (!$hcaptcha_result || !$hcaptcha_result['success']) {
    http_response_code(400);
    echo json_encode(['error' => 'hCaptcha verification failed']);
    exit();
}

// Extract common data
$naam = htmlspecialchars($data['naam']);
$email = htmlspecialchars($data['email']);
$telefoon = htmlspecialchars($data['telefoon']);
$onderwerp = htmlspecialchars($data['onderwerp'] ?? 'Nieuw bericht');
// $to_email is already set above from config

// Detect form type based on onderwerp, type_aanvraag, or specific fields
$form_type = 'contact'; // default
$type_aanvraag = $data['type_aanvraag'] ?? '';

if (strpos($onderwerp, 'Financieringsaanvraag') !== false || strpos($onderwerp, 'financiering') !== false) {
    $form_type = 'financiering';
} elseif (strpos($onderwerp, 'Interesse in occasion') !== false || !empty($data['auto_kenteken'])) {
    $form_type = 'interesse';
} elseif (!empty($data['kenteken']) && empty($data['type_werkzaamheden'])) {
    // Inruil/Verkoop/Consignatie formulier - bepaal subtype op basis van type_aanvraag
    if (strpos($type_aanvraag, 'verkopen') !== false || strpos($onderwerp, 'verkoop') !== false) {
        $form_type = 'verkoop';
    } elseif (strpos($type_aanvraag, 'consignatie') !== false || strpos($onderwerp, 'consignatie') !== false) {
        $form_type = 'consignatie';
    } else {
        $form_type = 'inruil';
    }
} elseif (strpos($onderwerp, 'Onderhoud') !== false || !empty($data['type_werkzaamheden'])) {
    $form_type = 'onderhoud';
}

// SMTP Configuration
$smtp_host = $config['smtp_host'] ?? 'smtp.hostinger.com';
$smtp_port = $config['smtp_port'] ?? 465;
$smtp_user = $config['smtp_user'] ?? 'info@carstorecuijk.nl';
$smtp_pass = $config['smtp_pass'] ?? '';
$to_email = $data['to_email'] ?? ($config['to_email'] ?? 'info@carstorecuijk.nl');

if (empty($smtp_pass)) {
    http_response_code(500);
    echo json_encode(['error' => 'SMTP password not configured']);
    exit();
}

// Generate email content based on form type
switch ($form_type) {
    case 'financiering':
        $geselecteerde_auto = htmlspecialchars($data['auto_merk_model'] ?? 'Niet geselecteerd');
        $aankoopbedrag = htmlspecialchars($data['aankoopbedrag'] ?? '0');
        $aanbetaling = htmlspecialchars($data['aanbetaling'] ?? '0');
        $looptijd = htmlspecialchars($data['looptijd'] ?? '0');
        $maandbedrag = htmlspecialchars($data['maandbedrag'] ?? '0');
        $bericht = htmlspecialchars($data['bericht'] ?? 'Geen extra bericht');
        
        $subject = "Financieringsaanvraag: {$geselecteerde_auto}";
        $message = <<<EOT
Nieuwe financieringsaanvraag

GESELECTEERDE AUTO:
{$geselecteerde_auto}

CALCULATOR GEGEVENS:
- Aankoopbedrag: €{$aankoopbedrag}
- Aanbetaling: {$aanbetaling}%
- Looptijd: {$looptijd} maanden
- Geschat maandbedrag: €{$maandbedrag}

CONTACT GEGEVENS:
- Naam: {$naam}
- Email: {$email}
- Telefoon: {$telefoon}

EXTRA BERICHT:
{$bericht}

---
Verstuurd via: carstorecuijk.nl
Formulier: Financieringsaanvraag
EOT;
        break;
        
    case 'interesse':
        $auto_kenteken = htmlspecialchars($data['auto_kenteken'] ?? 'Onbekend');
        $auto_merk_model = htmlspecialchars($data['auto_merk_model'] ?? '');
        $auto_id = htmlspecialchars($data['auto_id'] ?? '');
        $gewenste_datum = htmlspecialchars($data['gewenste_datum'] ?? 'Niet opgegeven');
        $opmerkingen = htmlspecialchars($data['opmerkingen'] ?? 'Geen opmerkingen');
        
        $subject = "Interesse in {$auto_merk_model} ({$auto_kenteken})";
        $message = <<<EOT
Nieuwe interesse in occasion

AUTO DETAILS:
- Kenteken: {$auto_kenteken}
- Merk/Model: {$auto_merk_model}
- Auto ID: {$auto_id}

CONTACT GEGEVENS:
- Naam: {$naam}
- Email: {$email}
- Telefoon: {$telefoon}

PROEFRIT:
- Gewenste datum: {$gewenste_datum}

OPMERKINGEN:
{$opmerkingen}

---
Verstuurd via: carstorecuijk.nl
Formulier: Interesse in occasion
EOT;
        break;
        
    case 'verkoop':
    case 'inruil':
    case 'consignatie':
        $kenteken = htmlspecialchars($data['kenteken'] ?? 'Niet opgegeven');
        $merk_model = htmlspecialchars($data['merk_model'] ?? '');
        $bouwjaar = htmlspecialchars($data['bouwjaar'] ?? 'Niet opgegeven');
        $kilometerstand = htmlspecialchars($data['kilometerstand'] ?? 'Niet opgegeven');
        $brandstof = htmlspecialchars($data['brandstof'] ?? 'Niet opgegeven');
        $transmissie = htmlspecialchars($data['transmissie'] ?? 'Niet opgegeven');
        $apk_tot = htmlspecialchars($data['apk_tot'] ?? 'Niet opgegeven');
        $gewenste_prijs = htmlspecialchars($data['gewenste_prijs'] ?? 'Niet opgegeven');
        $opmerkingen = htmlspecialchars($data['opmerkingen'] ?? 'Geen opmerkingen');
        
        // Bepaal het type voor het onderwerp en bericht
        $type_label = 'Aanbod';
        $formulier_label = 'Auto aanbod';
        if ($form_type === 'verkoop') {
            $type_label = 'Verkoop aanbod';
            $formulier_label = 'Auto verkopen';
        } elseif ($form_type === 'consignatie') {
            $type_label = 'Consignatie aanbod';
            $formulier_label = 'Auto consignatie';
        } elseif ($form_type === 'inruil') {
            $type_label = 'Inruil aanbod';
            $formulier_label = 'Auto inruil';
        }
        
        $subject = "Auto {$type_label}: {$merk_model} ({$kenteken})";
        $message = <<<EOT
Nieuw auto {$type_label}

TYPE AANVRAAG: {$type_aanvraag}

AUTO GEGEVENS:
- Kenteken: {$kenteken}
- Merk/Model: {$merk_model}
- Bouwjaar: {$bouwjaar}
- Kilometerstand: {$kilometerstand}
- Brandstof: {$brandstof}
- Transmissie: {$transmissie}
- APK tot: {$apk_tot}
- Gewenste prijs: {$gewenste_prijs}

CONTACT GEGEVENS:
- Naam: {$naam}
- Email: {$email}
- Telefoon: {$telefoon}

OPMERKINGEN:
{$opmerkingen}

---
Verstuurd via: carstorecuijk.nl
Formulier: {$formulier_label}
EOT;
        break;
        
    case 'onderhoud':
        $kenteken = htmlspecialchars($data['kenteken'] ?? 'Niet opgegeven');
        $merk_model = htmlspecialchars($data['merk_model'] ?? '');
        $kilometerstand = htmlspecialchars($data['kilometerstand'] ?? 'Niet opgegeven');
        $type_werkzaamheden = htmlspecialchars($data['type_werkzaamheden'] ?? 'Niet opgegeven');
        $gewenste_datum = htmlspecialchars($data['gewenste_datum'] ?? 'Niet opgegeven');
        $opmerkingen = htmlspecialchars($data['opmerkingen'] ?? 'Geen opmerkingen');
        
        $subject = "Offerte aanvraag onderhoud: {$merk_model}";
        $message = <<<EOT
Nieuwe offerte aanvraag voor onderhoud

AUTO GEGEVENS:
- Kenteken: {$kenteken}
- Merk/Model: {$merk_model}
- Kilometerstand: {$kilometerstand}

WERKZAAMHEDEN:
- Type: {$type_werkzaamheden}

AFSPRAAK:
- Gewenste datum: {$gewenste_datum}

CONTACT GEGEVENS:
- Naam: {$naam}
- Email: {$email}
- Telefoon: {$telefoon}

OPMERKINGEN:
{$opmerkingen}

---
Verstuurd via: carstorecuijk.nl
Formulier: Offerte aanvragen
EOT;
        break;
        
    case 'contact':
    default:
        $bericht = htmlspecialchars($data['bericht'] ?? 'Geen bericht');
        
        $subject = "Contact formulier: {$onderwerp}";
        $message = <<<EOT
Nieuw bericht via contactformulier

ONDERWERP: {$onderwerp}

CONTACT GEGEVENS:
- Naam: {$naam}
- Email: {$email}
- Telefoon: {$telefoon}

BERICHT:
{$bericht}

---
Verstuurd via: carstorecuijk.nl
Formulier: Contact
EOT;
        break;
}

// Send email using SMTP with anti-spam headers
$mail_sent = sendViaSMTP($to_email, $subject, $message, $email, $naam, $form_type);

if ($mail_sent) {
    echo json_encode(['success' => true, 'form_type' => $form_type]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}

// SMTP Send Function with improved deliverability
function sendViaSMTP($to, $subject, $body, $reply_to, $reply_name, $form_type = 'contact') {
    global $smtp_host, $smtp_port, $smtp_user, $smtp_pass;
    
    // Generate a unique Message-ID
    $message_id = '<' . uniqid() . '@carstorecuijk.nl>';
    
    // Get current date in RFC 2822 format
    $date = date('r');
    
    // Create socket connection
    $socket = @fsockopen('ssl://' . $smtp_host, $smtp_port, $errno, $errstr, 30);
    if (!$socket) {
        error_log("SMTP Connection failed: $errstr ($errno)");
        return false;
    }
    
    // Read greeting
    fgets($socket, 515);
    
    // EHLO
    fputs($socket, "EHLO carstorecuijk.nl\r\n");
    while ($line = fgets($socket, 515)) {
        if (substr($line, 3, 1) == ' ') break;
    }
    
    // AUTH LOGIN
    fputs($socket, "AUTH LOGIN\r\n");
    fgets($socket, 515);
    
    // Username
    fputs($socket, base64_encode($smtp_user) . "\r\n");
    fgets($socket, 515);
    
    // Password
    fputs($socket, base64_encode($smtp_pass) . "\r\n");
    $auth_response = fgets($socket, 515);
    if (substr($auth_response, 0, 3) != '235') {
        error_log("SMTP Auth failed: " . $auth_response);
        fclose($socket);
        return false;
    }
    
    // MAIL FROM - Use the authenticated user
    fputs($socket, "MAIL FROM:<{$smtp_user}>\r\n");
    fgets($socket, 515);
    
    // RCPT TO
    fputs($socket, "RCPT TO:<{$to}>\r\n");
    fgets($socket, 515);
    
    // DATA
    fputs($socket, "DATA\r\n");
    fgets($socket, 515);
    
    // Build proper email headers for deliverability
    $headers = "Date: {$date}\r\n";
    $headers .= "Message-ID: {$message_id}\r\n";
    $headers .= "From: Car Store Cuijk <{$smtp_user}>\r\n";
    $headers .= "Reply-To: {$reply_name} <{$reply_to}>\r\n";
    $headers .= "To: {$to}\r\n";
    $headers .= "Subject: {$subject}\r\n";
    
    // Anti-spam headers
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 7bit\r\n";
    
    // Authentication headers (SPF/DKIM friendly)
    $headers .= "X-Mailer: CarStoreCuijk-Form/1.0\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "Precedence: bulk\r\n";
    
    // List-Unsubscribe header (helps with deliverability)
    $headers .= "List-Unsubscribe: <mailto:{$smtp_user}?subject=unsubscribe>\r\n";
    
    // Custom headers for tracking
    $headers .= "X-Form-Type: {$form_type}\r\n";
    $headers .= "X-Originating-IP: " . ($_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\r\n";
    
    $headers .= "\r\n";
    
    fputs($socket, $headers . $body . "\r\n.\r\n");
    $data_response = fgets($socket, 515);
    
    // QUIT
    fputs($socket, "QUIT\r\n");
    fclose($socket);
    
    return substr($data_response, 0, 3) == '250';
}
?>
