// Fungsi untuk animasi scroll smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fungsi untuk navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if(window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        navbar.classList.add('bg-black');
        navbar.classList.remove('bg-opacity-30');
    } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.remove('bg-black');
        navbar.classList.add('bg-opacity-30');
    }
});

// Fungsi untuk animasi saat scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if(elementPosition < screenPosition) {
            element.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}

// Jalankan saat load dan scroll
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// Fungsi untuk logout
function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
}

// Cek login status untuk halaman yang membutuhkan login
const protectedPages = ['home.html', 'profile.html', 'about.html', 'gallery.html', 'contact.html'];

window.addEventListener('DOMContentLoaded', function() {
    if(protectedPages.includes(window.location.pathname.split('/').pop())) {
        if(localStorage.getItem('isLoggedIn') !== 'true') {
            window.location.href = 'index.html';
        }
    }
});