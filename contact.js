document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Ambil data form
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Validasi sederhana
    if(!formData.name || !formData.email || !formData.subject || !formData.message) {
        alert('Harap isi semua field!');
        return;
    }
    
    // Kirim data ke server (simulasi)
    fetch('server/contact.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert('Pesan berhasil dikirim! Saya akan segera merespon.');
            document.getElementById('contactForm').reset();
        } else {
            alert('Terjadi kesalahan. Silakan coba lagi.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Terjadi kesalahan. Silakan coba lagi.');
    });
});