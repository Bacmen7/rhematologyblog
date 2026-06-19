<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "error" => "Method not allowed"]);
    exit();
}

$data = json_decode(file_get_contents("php://input"), true);

$name    = htmlspecialchars(trim($data["name"] ?? ""));
$phone   = htmlspecialchars(trim($data["phone"] ?? ""));
$message = htmlspecialchars(trim($data["message"] ?? ""));

if (!$name || !$phone) {
    echo json_encode(["success" => false, "error" => "Name and phone required"]);
    exit();
}

$to      = "omnirheuma@gmail.com";
$subject = "New Appointment Request - Omni Rheuma";
$body    = "New booking from website:\n\n";
$body   .= "Name: $name\n";
$body   .= "Phone: $phone\n";
$body   .= "Message: $message\n";

$headers  = "From: noreply@omnirheuma.com\r\n";
$headers .= "Reply-To: $phone\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

echo json_encode(["success" => $sent]);
?>
