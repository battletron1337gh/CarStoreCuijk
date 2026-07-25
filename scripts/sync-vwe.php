<?php
/**
 * VWE Sync Script - Haalt alle voertuigen op van VWE API
 * Dit is een eenmalige sync om de database te resetten
 */

// VWE API credentials (van VWE_WEBHOOK_SETUP.md)
$vweConfig = [
    'api_key' => getenv('VWE_API_KEY') ?: '',
    'api_secret' => getenv('VWE_API_SECRET') ?: '',
];

// Paden
$dataDir = __DIR__ . '/../data/';
$vehiclesFile = $dataDir . 'vehicles.json';
$logFile = $dataDir . 'vwe-sync.log';

function logMessage($message) {
    global $logFile;
    $timestamp = date('Y-m-d H:i:s');
    $logEntry = "[$timestamp] $message" . PHP_EOL;
    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);
    echo $message . PHP_EOL;
}

// Zorg dat data directory bestaat
if (!is_dir($dataDir)) {
    mkdir($dataDir, 0755, true);
}

// VWE voertuigen (handmatig ingevoerd vanuit de VWE lijst)
// Dit zijn de voertuignummers uit jouw VWE overzicht
$vweVoertuigen = [
    ['voertuignr' => '3216149', 'kenteken' => '', 'merk' => 'BMW', 'model' => '3-serie', 'variant' => '318i', 'status' => 'beschikbaar'],
    ['voertuignr' => '3607793', 'kenteken' => '', 'merk' => 'BMW', 'model' => '3-serie Touring', 'variant' => '318i', 'status' => 'beschikbaar'],
    ['voertuignr' => '3589700', 'kenteken' => '', 'merk' => 'Citroen', 'model' => 'C3', 'variant' => '1.4i Différence', 'status' => 'beschikbaar'],
    ['voertuignr' => '3574972', 'kenteken' => '18JHXR', 'merk' => 'Citroen', 'model' => 'C5', 'variant' => '1.8-16V Ligne Prestige', 'status' => 'beschikbaar'],
    ['voertuignr' => '3576764', 'kenteken' => '', 'merk' => 'Fiat', 'model' => '500', 'variant' => '0.9 TwinAir Plus', 'status' => 'beschikbaar'],
    ['voertuignr' => '3482434', 'kenteken' => '', 'merk' => 'Ford', 'model' => 'Fiesta', 'variant' => '1.0 EcoBoost Titanium', 'status' => 'beschikbaar'],
    ['voertuignr' => '3560590', 'kenteken' => '', 'merk' => 'Hyundai', 'model' => 'I10', 'variant' => '1.2 Plus', 'status' => 'beschikbaar'],
    ['voertuignr' => '3526504', 'kenteken' => '', 'merk' => 'Hyundai', 'model' => 'Kona', 'variant' => '1.0 T-GDI Comfort', 'status' => 'beschikbaar'],
    ['voertuignr' => '3609180', 'kenteken' => '', 'merk' => 'Mercedes-Benz', 'model' => 'A-klasse', 'variant' => '250 e Premium Plus', 'status' => 'beschikbaar'],
    ['voertuignr' => '3439307', 'kenteken' => '', 'merk' => 'Mercedes-Benz', 'model' => 'C-klasse', 'variant' => '160 Business Solution AMG', 'status' => 'beschikbaar'],
    ['voertuignr' => '3460848', 'kenteken' => '', 'merk' => 'Mini', 'model' => 'Clubman', 'variant' => '2.0 Cooper S Salt', 'status' => 'beschikbaar'],
    ['voertuignr' => '3482432', 'kenteken' => '', 'merk' => 'Mini', 'model' => 'Countryman', 'variant' => '1.6 One Edition', 'status' => 'beschikbaar'],
    ['voertuignr' => '3584309', 'kenteken' => 'L494BP', 'merk' => 'Nissan', 'model' => 'Micra', 'variant' => '1.0 IG-T N-Design', 'status' => 'beschikbaar'],
    ['voertuignr' => '3456028', 'kenteken' => '', 'merk' => 'Opel', 'model' => 'Crossland X', 'variant' => '1.2 Turbo', 'status' => 'beschikbaar'],
    ['voertuignr' => '2996209', 'kenteken' => '', 'merk' => 'Peugeot', 'model' => '107', 'variant' => '1.0-12V XS', 'status' => 'beschikbaar'],
    ['voertuignr' => '3524191', 'kenteken' => '', 'merk' => 'Peugeot', 'model' => '108', 'variant' => '1.0 e-VTi Active', 'status' => 'beschikbaar'],
    ['voertuignr' => '3560110', 'kenteken' => '', 'merk' => 'Renault', 'model' => 'Twingo', 'variant' => '1.2-16V Authentique', 'status' => 'beschikbaar'],
    ['voertuignr' => '3546198', 'kenteken' => '', 'merk' => 'Seat', 'model' => 'Ibiza', 'variant' => '1.0 TSI FR', 'status' => 'beschikbaar'],
    ['voertuignr' => '3582721', 'kenteken' => '', 'merk' => 'Seat', 'model' => 'Leon ST', 'variant' => '1.0 EcoTSI Style', 'status' => 'beschikbaar'],
    ['voertuignr' => '3557176', 'kenteken' => '', 'merk' => 'Skoda', 'model' => 'Citigo', 'variant' => '1.0 Greentech Arctic', 'status' => 'beschikbaar'],
    ['voertuignr' => '3573276', 'kenteken' => 'J993PF', 'merk' => 'Toyota', 'model' => 'Aygo', 'variant' => '1.0 VVT-i x-fun', 'status' => 'beschikbaar'],
    ['voertuignr' => '3576763', 'kenteken' => '', 'merk' => 'Volkswagen', 'model' => 'Passat Variant', 'variant' => '1.5 TSI', 'status' => 'beschikbaar'],
    ['voertuignr' => '3582727', 'kenteken' => 'NV602P', 'merk' => 'Volkswagen', 'model' => 'Up!', 'variant' => '1.0 BMT move up!', 'status' => 'beschikbaar'],
];

// Bouw vehicles array
$vehicles = [];
foreach ($vweVoertuigen as $v) {
    $vehicles[] = [
        'id' => $v['kenteken'] ?: $v['voertuignr'],
        'voertuignr' => $v['voertuignr'],
        'kenteken' => $v['kenteken'],
        'merk' => $v['merk'],
        'model' => $v['model'],
        'variant' => $v['variant'],
        'status' => $v['status'],
        'sjabloon' => '',
        'prijs' => '',
        'bouwjaar' => '',
        'kmStand' => '',
        'brandstof' => '',
        'transmissie' => '',
        'kleur' => '',
        'fotoUrls' => [],
        'features' => [],
        'timestamp' => date('c'),
        'raw' => $v
    ];
}

// Sla op
$data = [
    'vehicles' => $vehicles,
    'lastUpdate' => date('c'),
    'syncedFrom' => 'VWE Manual Sync'
];

$json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
file_put_contents($vehiclesFile, $json);

logMessage("Sync complete: " . count($vehicles) . " voertuigen opgeslagen");
logMessage("Bestand: $vehiclesFile");

echo PHP_EOL . "Klaar! Upload $vehiclesFile naar de server." . PHP_EOL;
