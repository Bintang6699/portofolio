<?php
header('Content-Type: application/json');

// Ambil data dari request
$data = json_decode(file_get_contents('php://input'), true);

// Validasi data
if(empty($data['name']) || empty($data['email']) || empty($data['subject']) || empty($data['message'])) {
    echo json_encode(['success' => false, 'message' => 'Semua field harus diisi']);
    exit;
}

// Konfigurasi email
$to = 'bintangahmad032@gmail.com';
$subject = 'Pesan dari Portofolio: ' . $data['subject'];
$message = "
    <html>
    <head>
        <title>{$data['subject']}</title>
    </head>
    <body>
        <h2>Anda menerima pesan baru dari portofolio</h2>
        <p><strong>Nama:</strong> {$data['name']}</p>
        <p><strong>Email:</strong> {$data['email']}</p>
        <p><strong>Pesan:</strong></p>
        <p>{$data['message']}</p>
    </body>
    </html>
";

// Headers untuk email HTML
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: {$data['email']}" . "\r\n";

// Kirim email
$mailSent = mail($to, $subject, $message, $headers);

if($mailSent) {
    echo json_encode(['success' => true, 'message' => 'Pesan berhasil dikirim']);
} else {
    echo json_encode(['success' => false, 'message' => 'Gagal mengirim pesan']);
}
?>