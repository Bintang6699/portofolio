document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Validasi sederhana
    if(username === 'faisal' && password === 'bintang123') {
        // Simpan status login di localStorage
        localStorage.setItem('isLoggedIn', 'true');
        
        // Redirect ke halaman home
        window.location.href = 'home.html';
    } else {
        alert('Username atau password salah!');
    }
});

// Cek jika user sudah login
window.addEventListener('DOMContentLoaded', function() {
    if(localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = 'home.html';
    }
});