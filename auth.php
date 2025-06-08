<?php
header('Content-Type: application/json');

// Simulasi data user (dalam aplikasi nyata, gunakan database)
$validUsers = [
    'faisal' => [
        'password' => 'bintang123', // Dalam aplikasi nyata, gunakan password hash
        'email' => 'bintangahmad032@gmail.com'
    ]
];

// Ambil data dari request
$data = json_decode(file_get_contents('php://input'), true);

// Validasi data
if(empty($data['username']) || empty($data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Username dan password harus diisi']);
    exit;
}

// Cek user
if(isset($validUsers[$data['username']]) && $validUsers[$data['username']]['password'] === $data['password']) {
    echo json_encode(['success' => true, 'message' => 'Login berhasil']);
} else {
    echo json_encode(['success' => false, 'message' => 'Username atau password salah']);
}
?>