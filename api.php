<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? 'Unknown';
    $doctor = $_POST['doctor'] ?? 'Unknown';
    
    $data = "Patient: $name | Doctor: $doctor | Time: " . date('Y-m-d H:i:s') . "\n";
    file_put_contents("appointments.txt", $data, FILE_APPEND);
    
    echo json_encode(["success" => true, "message" => "Appointment Saved"]);
} else {
    echo json_encode(["success" => false, "message" => "Invalid Request"]);
}
?>