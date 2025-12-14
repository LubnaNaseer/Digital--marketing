const hamburger = document.querySelector('.hamburger');
const navAll = document.querySelector('.nav-all');

hamburger.addEventListener('click', () => {
    navAll.classList.toggle('active');
});

// Close menu when clicking any link OR mobile button
document.querySelectorAll('.nav-menu a, .mobile-btn').forEach(item => {
    item.addEventListener('click', () => {
        navAll.classList.remove('active');
    });
});

// Optional: Close menu when clicking outside
document.addEventListener('click', (event) => {
    const isClickInsideNav = event.target.closest('.navbar');
    const isMenuOpen = navAll.classList.contains('active');
    
    if (!isClickInsideNav && isMenuOpen) {
        navAll.classList.remove('active');
    }
});

// header
// Simple animation for buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        // Ripple effect
        let ripple = document.createElement('span');
        let rect = this.getBoundingClientRect();
        let size = Math.max(rect.width, rect.height);
        let x = e.clientX - rect.left - size / 2;
        let y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.7);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            top: ${y}px;
            left: ${x}px;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    .btn-primary, .btn-secondary {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);


//footer

/* Add this JavaScript for scroll-to-top functionality */
    // Scroll to top button
    const scrollTopBtn = document.createElement('a');
    scrollTopBtn.href = '#';
    scrollTopBtn.className = 'scroll-top';
    scrollTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
