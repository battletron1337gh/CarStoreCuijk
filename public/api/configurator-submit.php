<?php
// Configurator lead opslag + e-mail voor Car Store Cuijk

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$configFile = __DIR__ . '/config.php';
$config = file_exists($configFile) ? require $configFile : require __DIR__ . '/config.example.php';

$pricesFile = __DIR__ . '/configurator-prices.json';
$prices = [];
if (file_exists($pricesFile)) {
    $prices = json_decode(file_get_contents($pricesFile), true);
    if (!is_array($prices)) {
        $prices = [];
    }
}

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data || empty($data['naam']) || empty($data['email']) || empty($data['telefoon'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Naam, email en telefoon zijn verplicht']);
    exit();
}

if (empty($data['kenteken'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Kenteken is verplicht']);
    exit();
}

if (empty($data['parts']) || !is_array($data['parts'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Selecteer minimaal één onderdeel']);
    exit();
}

// hCaptcha verification (if token provided)
if (!empty($data['hcaptcha_token'])) {
    $hcaptcha_secret = $config['hcaptcha_secret'];
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
}

// Extract fields
$naam = htmlspecialchars($data['naam']);
$email = htmlspecialchars($data['email']);
$telefoon = htmlspecialchars($data['telefoon']);
$kenteken = htmlspecialchars(strtoupper(preg_replace('/[^A-Z0-9]/i', '', $data['kenteken'])));
$merk = htmlspecialchars($data['merk'] ?? 'Onbekend');
$model = htmlspecialchars($data['model'] ?? 'Onbekend');
$kleur = htmlspecialchars($data['kleur'] ?? 'Onbekend');
$brandstof = htmlspecialchars($data['brandstof'] ?? 'Onbekend');
$bouwjaar = htmlspecialchars($data['bouwjaar'] ?? 'Onbekend');
$montage = htmlspecialchars($data['montage'] ?? 'Niet opgegeven');
$gewenste_datum = htmlspecialchars($data['gewenste_datum'] ?? 'Niet opgegeven');
$opmerkingen = htmlspecialchars($data['opmerkingen'] ?? 'Geen opmerkingen');
$parts = $data['parts'];
$to_email = $data['to_email'] ?? $config['to_email'] ?? 'info@carstorecuijk.nl';

// Server-side price validation
$validatedParts = [];
$subtotal = 0;
foreach ($parts as $part) {
    $partName = $part['name'] ?? '';
    // Try to find the option id from the submitted name (stripped of quantity suffix)
    $baseName = preg_replace('/\\s*\\(x\\d+\\)$/', '', $partName);
    $optionId = null;
    foreach ($prices as $id => $price) {
        if (stripos($baseName, $id) !== false) {
            $optionId = $id;
            break;
        }
    }
    if (!$optionId) {
        http_response_code(400);
        echo json_encode(['error' => 'Onbekend onderdeel in aanvraag']);
        exit();
    }
    $unitPrice = $prices[$optionId];
    // Determine quantity from name suffix or default to 1
    $quantity = 1;
    if (preg_match('/\\(x(\\d+)\\)$/', $partName, $matches)) {
        $quantity = intval($matches[1]);
    }
    $lineTotal = $unitPrice * $quantity;
    $subtotal += $lineTotal;
    $validatedParts[] = [
        'name' => $baseName,
        'quantity' => $quantity,
        'unitPrice' => $unitPrice,
        'lineTotal' => $lineTotal,
    ];
}

$vat = $subtotal * 0.21;
$totaal = $subtotal + $vat;

$submittedTotal = round(floatval($data['totaal'] ?? 0), 2);
if (abs($submittedTotal - round($totaal, 2)) > 0.01) {
    http_response_code(400);
    echo json_encode(['error' => 'Ongeldig totaalbedrag']);
    exit();
}

// Build parts text
$partsText = '';
foreach ($validatedParts as $part) {
    $partNaam = htmlspecialchars($part['name']);
    $lineTotalFormatted = number_format($part['lineTotal'], 2, ',', '.');
    $unitPriceFormatted = number_format($part['unitPrice'], 2, ',', '.');
    if ($part['quantity'] > 1) {
        $partsText .= "- {$partNaam} (x{$part['quantity']} á €{$unitPriceFormatted}): €{$lineTotalFormatted}\n";
    } else {
        $partsText .= "- {$partNaam}: €{$lineTotalFormatted}\n";
    }
}

// Save lead to JSON file
$dataDir = __DIR__ . '/../data';
$leadsFile = $dataDir . '/configurator-leads.json';

if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
}

$leads = [];
if (file_exists($leadsFile)) {
    $existing = @file_get_contents($leadsFile);
    if ($existing) {
        $decoded = json_decode($existing, true);
        if (is_array($decoded)) {
            $leads = $decoded;
        }
    }
}

$lead = [
    'id' => uniqid('cfg-', true),
    'created_at' => date('c'),
    'kenteken' => $kenteken,
    'merk' => $merk,
    'model' => $model,
    'kleur' => $kleur,
    'brandstof' => $brandstof,
    'bouwjaar' => $bouwjaar,
    'montage' => $montage,
    'gewenste_datum' => $gewenste_datum,
    'naam' => $naam,
    'email' => $email,
    'telefoon' => $telefoon,
    'opmerkingen' => $opmerkingen,
    'parts' => $validatedParts,
    'totaal' => $totaal,
    'ip' => $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown',
];

$leads[] = $lead;
@file_put_contents($leadsFile, json_encode($leads, JSON_PRETTY_PRINT));

// Send email
$smtp_host = $config['smtp_host'];
$smtp_port = $config['smtp_port'];
$smtp_user = $config['smtp_user'];
$smtp_pass = $config['smtp_pass'];

$totaalFormatted = number_format($totaal, 2, ',', '.');

$subject = "Nieuwe configurator aanvraag: {$merk} {$model} ({$kenteken})";
$message = <<<EOT
Nieuwe aanvraag via de auto-configurator

AUTO GEGEVENS:
- Kenteken: {$kenteken}
- Merk: {$merk}
- Model: {$model}
- Kleur: {$kleur}
- Brandstof: {$brandstof}
- Bouwjaar: {$bouwjaar}

GESELECTEERDE ONDERDELEN:
{$partsText}
Totaal: €{$totaalFormatted}

AFHANDELING:
- Montage/optie: {$montage}
- Gewenste datum: {$gewenste_datum}

CONTACT GEGEVENS:
- Naam: {$naam}
- Email: {$email}
- Telefoon: {$telefoon}

OPMERKINGEN:
{$opmerkingen}

---
Verstuurd via: carstorecuijk.nl/auto-configurator
EOT;

$mail_sent = sendViaSMTP($to_email, $subject, $message, $email, $naam, $smtp_host, $smtp_port, $smtp_user, $smtp_pass);

if ($mail_sent) {
    echo json_encode(['success' => true, 'lead_id' => $lead['id']]);
} else {
    // Lead is saved but email failed
    http_response_code(500);
    echo json_encode(['error' => 'Lead opgeslagen, maar e-mail kon niet worden verstuurd']);
}

function sendViaSMTP($to, $subject, $body, $reply_to, $reply_name, $smtp_host, $smtp_port, $smtp_user, $smtp_pass) {
    $message_id = '<' . uniqid() . '@carstorecuijk.nl>';
    $date = date('r');

    $socket = @fsockopen('ssl://' . $smtp_host, $smtp_port, $errno, $errstr, 30);
    if (!$socket) {
        error_log("SMTP Connection failed: $errstr ($errno)");
        return false;
    }

    fgets($socket, 515);

    fputs($socket, "EHLO carstorecuijk.nl\r\n");
    while ($line = fgets($socket, 515)) {
        if (substr($line, 3, 1) == ' ') break;
    }

    fputs($socket, "AUTH LOGIN\r\n");
    fgets($socket, 515);

    fputs($socket, base64_encode($smtp_user) . "\r\n");
    fgets($socket, 515);

    fputs($socket, base64_encode($smtp_pass) . "\r\n");
    $auth_response = fgets($socket, 515);
    if (substr($auth_response, 0, 3) != '235') {
        error_log("SMTP Auth failed: " . $auth_response);
        fclose($socket);
        return false;
    }

    fputs($socket, "MAIL FROM:<{$smtp_user}>\r\n");
    fgets($socket, 515);

    fputs($socket, "RCPT TO:<{$to}>\r\n");
    fgets($socket, 515);

    fputs($socket, "DATA\r\n");
    fgets($socket, 515);

    $headers = "Date: {$date}\r\n";
    $headers .= "Message-ID: {$message_id}\r\n";
    $headers .= "From: Car Store Cuijk <{$smtp_user}>\r\n";
    $headers .= "Reply-To: {$reply_name} <{$reply_to}>\r\n";
    $headers .= "To: {$to}\r\n";
    $headers .= "Subject: {$subject}\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $headers .= "Content-Transfer-Encoding: 7bit\r\n";
    $headers .= "X-Mailer: CarStoreCuijk-Configurator/1.0\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "Precedence: bulk\r\n";
    $headers .= "List-Unsubscribe: <mailto:{$smtp_user}?subject=unsubscribe>\r\n";
    $headers .= "X-Form-Type: configurator\r\n";
    $headers .= "X-Originating-IP: " . ($_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\r\n";
    $headers .= "\r\n";

    fputs($socket, $headers . $body . "\r\n.\r\n");
    $data_response = fgets($socket, 515);

    fputs($socket, "QUIT\r\n");
    fclose($socket);

    return substr($data_response, 0, 3) == '250';
}
