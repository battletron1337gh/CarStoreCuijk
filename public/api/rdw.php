<?php
// RDW kenteken lookup proxy voor Car Store Cuijk configurator

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

$kenteken = isset($_GET['kenteken']) ? strtoupper(preg_replace('/[^A-Z0-9]/i', '', $_GET['kenteken'])) : '';

if (strlen($kenteken) < 6) {
    http_response_code(400);
    echo json_encode(['error' => 'Kenteken is verplicht']);
    exit();
}

$rdwUrl = 'https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=' . urlencode($kenteken);

$response = @file_get_contents($rdwUrl);

if ($response === false) {
    http_response_code(502);
    echo json_encode(['error' => 'RDW API niet bereikbaar']);
    exit();
}

$data = json_decode($response, true);

if (!is_array($data) || count($data) === 0) {
    http_response_code(404);
    echo json_encode(['error' => 'Kenteken niet gevonden']);
    exit();
}

$vehicle = $data[0];

$result = [
    'kenteken' => $kenteken,
    'merk' => $vehicle['merk'] ?? null,
    'model' => $vehicle['handelsbenaming'] ?? null,
    'kleur' => $vehicle['eerste_kleur'] ?? null,
    'brandstof' => $vehicle['brandstof_omschrijving'] ?? ($vehicle['brandstof_bromfiets'] ?? null),
    'carrosserie' => $vehicle['carrosserie_class'] ?? ($vehicle['carrosserie'] ?? null),
    'bouwjaar' => isset($vehicle['datum_eerste_toelating']) ? substr($vehicle['datum_eerste_toelating'], 0, 4) : null,
    'cilinderinhoud' => $vehicle['cilinderinhoud'] ?? null,
    'aantal_zitplaatsen' => $vehicle['aantal_zitplaatsen'] ?? null,
];

echo json_encode(['success' => true, 'data' => $result]);
