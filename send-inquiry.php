<?php
/**
 * Casa Maria Beach Villa — Direct Inquiry Dispatcher
 * Target Recipient: reservations@casamariaph.com
 */

header('Content-Type: application/json; charset=UTF-8');

// Allow CORS for local testing if needed
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// Read JSON input or fallback to $_POST
$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
    $data = $_POST;
}

// 1. Honeypot check (Spam protection)
if (!empty($data['website']) || !empty($data['_gotcha']) || !empty($data['honeypot'])) {
    // Silently return success to mislead bots
    echo json_encode(['success' => true, 'message' => 'Inquiry received']);
    exit;
}

// 2. Extract and sanitize inputs
$name    = isset($data['name']) ? strip_tags(trim($data['name'])) : '';
$email   = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone   = isset($data['phone']) ? strip_tags(trim($data['phone'])) : '';
$message = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

// 3. Validation
if (empty($name) || (empty($email) && empty($phone)) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide your full name, message, and at least an email address or mobile number.'
    ]);
    exit;
}

// Recipient details
$to = 'reservations@casamariaph.com';
$subject = "New Guest Inquiry: " . $name . " — Casa Maria Beach Villa";

$timestamp = date('F j, Y, g:i a') . ' (PHT)';

// 4. Build Branded HTML Email
$emailBody = "
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8'>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F7F5F2; margin: 0; padding: 24px; color: #2D2D2D; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 18px; border: 1px solid #EAE2D5; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
    .header { background: #1F2B23; padding: 32px 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 26px; font-serif: 'Georgia', serif; font-weight: normal; letter-spacing: 1px; color: #ffffff; }
    .header p { margin: 6px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 3px; color: #D7C7AE; }
    .content { padding: 32px 28px; }
    .pill { display: inline-block; background: #EFECE6; color: #586B5A; font-size: 11px; font-weight: bold; padding: 4px 12px; border-radius: 999px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 20px; }
    .field { margin-bottom: 18px; border-bottom: 1px solid #F0ECE4; padding-bottom: 14px; }
    .field:last-child { border-bottom: none; }
    .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1.5px; color: #586B5A; font-weight: 600; margin-bottom: 4px; }
    .value { font-size: 16px; color: #2F3A33; font-weight: 500; }
    .message-box { background: #F7F5F2; border-radius: 12px; padding: 18px; font-size: 15px; line-height: 1.6; color: #2F3A33; white-space: pre-wrap; border-left: 4px solid #586B5A; margin-top: 8px; }
    .footer { background: #F7F5F2; padding: 18px 24px; text-align: center; font-size: 12px; color: #8C8275; border-top: 1px solid #EAE2D5; }
  </style>
</head>
<body>
  <div class='card'>
    <div class='header'>
      <h1>Casa Maria Beach Villa</h1>
      <p>Direct Inquiry Desk</p>
    </div>
    <div class='content'>
      <div class='pill'>New Reservation Inquiry</div>
      
      <div class='field'>
        <div class='label'>Guest Name</div>
        <div class='value'>" . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</div>
      </div>

      <div class='field'>
        <div class='label'>Contact Number</div>
        <div class='value'>" . (!empty($phone) ? htmlspecialchars($phone, ENT_QUOTES, 'UTF-8') : '<em>Not provided</em>') . "</div>
      </div>

      <div class='field'>
        <div class='label'>Email Address</div>
        <div class='value'>" . (!empty($email) ? "<a href='mailto:" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "' style='color:#586B5A;'>" . htmlspecialchars($email, ENT_QUOTES, 'UTF-8') . "</a>" : '<em>Not provided</em>') . "</div>
      </div>

      <div class='field'>
        <div class='label'>Submission Timestamp</div>
        <div class='value' style='font-size: 14px; color: #666;'>" . $timestamp . "</div>
      </div>

      <div class='field'>
        <div class='label'>Message & Details</div>
        <div class='message-box'>" . nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8')) . "</div>
      </div>
    </div>
    <div class='footer'>
      Received via Direct Inquiry Desk on <a href='https://casamariaph.com' style='color:#586B5A; text-decoration:none;'>casamariaph.com</a>
    </div>
  </div>
</body>
</html>
";

// 5. Construct Email Headers
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/html; charset=UTF-8';
$headers[] = 'From: Casa Maria Concierge <reservations@casamariaph.com>';

if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
} else {
    $headers[] = 'Reply-To: reservations@casamariaph.com';
}

$headers[] = 'X-Mailer: PHP/' . phpversion();

// 6. Send Email via Hostinger PHP mail()
$sent = @mail($to, $subject, $emailBody, implode("\r\n", $headers));

// Optional Auto-Reply to Guest if email was provided
if ($sent && !empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $replySubject = "We have received your inquiry — Casa Maria Beach Villa";
    $replyBody = "
    <!DOCTYPE html>
    <html>
    <head><meta charset='UTF-8'></head>
    <body style='font-family:-apple-system,BlinkMacSystemFont,Roboto,Helvetica,sans-serif; background:#F7F5F2; padding:24px; color:#2D2D2D;'>
      <div style='max-width:560px; margin:0 auto; background:#ffffff; border-radius:16px; border:1px solid #EAE2D5; padding:32px;'>
        <h2 style='font-serif; color:#1F2B23; margin-top:0;'>Thank You, " . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . "</h2>
        <p style='font-size:14px; line-height:1.6; color:#444;'>We have received your inquiry regarding Casa Maria Beach Villa in Barangay Amunitan, Gonzaga, Cagayan.</p>
        <p style='font-size:14px; line-height:1.6; color:#444;'>Our villa concierge will review your preferred dates and requirements, and reach out to you shortly via your provided contact details.</p>
        <p style='font-size:14px; line-height:1.6; color:#444;'>If you have urgent questions, you can also reach our on-site team directly via <strong>WhatsApp or Phone at 0956 019 3089</strong>.</p>
        <hr style='border:none; border-top:1px solid #EFECE6; margin:24px 0;' />
        <p style='font-size:12px; color:#888; margin:0;'>Warm regards,<br><strong style='color:#1F2B23;'>Casa Maria Beach Villa Concierge</strong><br>Barangay Amunitan, Gonzaga, Cagayan<br><a href='https://casamariaph.com' style='color:#586B5A;'>casamariaph.com</a></p>
      </div>
    </body>
    </html>";

    $replyHeaders = [
        'MIME-Version: 1.0',
        'Content-Type: text/html; charset=UTF-8',
        'From: Casa Maria Beach Villa <reservations@casamariaph.com>',
        'Reply-To: reservations@casamariaph.com',
        'X-Mailer: PHP/' . phpversion()
    ];

    @mail($email, $replySubject, $replyBody, implode("\r\n", $replyHeaders));
}

// 7. Response
// Note: On local development (XAMPP without active local sendmail), we gracefully return true so the front-end still works during local testing.
$isLocal = in_array($_SERVER['REMOTE_ADDR'] ?? '', ['127.0.0.1', '::1']) || strpos($_SERVER['HTTP_HOST'] ?? '', 'localhost') !== false;

if ($sent || $isLocal) {
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your inquiry has been sent to reservations@casamariaph.com.'
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to send inquiry. Please contact us directly via WhatsApp or Phone.'
    ]);
}
