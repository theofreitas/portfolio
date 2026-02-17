// Loading Screen Logic
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    
    // Ensure minimum loading time for smooth transition (at least 1 second)
    const minLoadTime = 1000;
    const loadStartTime = performance.now();
    
    setTimeout(function() {
        const loadEndTime = performance.now();
        const actualLoadTime = loadEndTime - loadStartTime;
        const remainingTime = Math.max(0, minLoadTime - actualLoadTime);
        
        setTimeout(function() {
            // Hide loading screen
            loadingScreen.classList.add('hidden');
            
            // Show main content
            mainContent.classList.add('visible');
        }, remainingTime);
    }, 0);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    }
    
    lastScroll = currentScroll;
});
