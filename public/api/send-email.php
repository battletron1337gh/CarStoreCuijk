<?php
// SMTP Email API for Car Store Cuijk
// Supports multiple form types: interesse, contact, inruil, onderhoud

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

// Extract common data
$naam = htmlspecialchars($data['naam']);
$email = htmlspecialchars($data['email']);
$telefoon = htmlspecialchars($data['telefoon']);
$onderwerp = htmlspecialchars($data['onderwerp'] ?? 'Nieuw bericht');
$to_email = $data['to_email'] ?? 'info@carstorecuijk.nl';

// Detect form type based on onderwerp, type_aanvraag, or specific fields
$form_type = 'contact'; // default
$type_aanvraag = $data['type_aanvraag'] ?? '';

if (strpos($onderwerp, 'Interesse in occasion') !== false || !empty($data['auto_kenteken'])) {
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
$smtp_host = 'smtp.hostinger.com';
$smtp_port = 465;
$smtp_user = 'info@carstorecuijk.nl';
$smtp_pass = 'PASSWORD_PLACEHOLDER'; // JOUW SMTP WACHTWOORD HIER

// Generate email content based on form type
switch ($form_type) {
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

// Headers - Geoptimaliseerd voor deliverability
$headers = "From: {$naam} via Car Store Cuijk <{$smtp_user}>\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Return-Path: {$smtp_user}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "X-Priority: 3 (Normal)\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "MIME-Version: 1.0\r\n";

// Send email using PHP mail() or SMTP
$mail_sent = mail($to_email, $subject, $message, $headers, "-f{$smtp_user}");

if ($mail_sent) {
    echo json_encode(['success' => true, 'form_type' => $form_type]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email']);
}
?>