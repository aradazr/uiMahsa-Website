// Simple JavaScript for the portfolio website

// Initialize EmailJS
(function () {
    emailjs.init("_IuuDYG72uM9Pxa8X");
})();

document.addEventListener('DOMContentLoaded', function () {
    // Header scroll effect
    function headerScrollEffect() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Smooth scrolling for navigation links
    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    }

    // Mobile menu toggle
    function toggleMobileMenu() {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');

        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    // Create magic wand cursor
    function createMagicWandCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'magic-wand-cursor';
        cursor.innerHTML = '🪄';
        cursor.style.cssText = `
            position: fixed;
            pointer-events: none;
            z-index: 10000;
            font-size: 24px;
            transition: transform 0.1s ease;
            filter: drop-shadow(0 0 8px var(--accent-lilac));
            opacity: 0;
            transform: scale(0.5);
        `;
        document.body.appendChild(cursor);

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
            cursor.style.transform = 'scale(1)';
        });

        // Smooth cursor animation
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hide cursor when mouse leaves window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursor.style.transform = 'scale(0.5)';
        });

        return cursor;
    }

    // Create sparkle effect
    function createSparkleEffect(x, y) {
        const colors = ['#a855f7', '#c084fc', '#7c3aed', '#f8fafc', '#cbd5e1'];
        const sparkleTypes = ['star', 'circle', 'diamond', 'cross', 'triangle'];

        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            const sparkleType = sparkleTypes[Math.floor(Math.random() * sparkleTypes.length)];
            sparkle.setAttribute('data-type', sparkleType);

            // Random position around click point
            const offsetX = (Math.random() - 0.5) * 120;
            const offsetY = (Math.random() - 0.5) * 120;
            const size = Math.random() * 10 + 6;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const angle = Math.random() * 360;
            const distance = Math.random() * 100 + 30;

            sparkle.style.cssText = `
                position: fixed;
                left: ${x + offsetX}px;
                top: ${y + offsetY}px;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                pointer-events: none;
                z-index: 9999;
                opacity: 1;
                transform: scale(0) rotate(${angle}deg);
                animation: sparkle-animation-${sparkleType} 1.5s ease-out forwards;
                box-shadow: 0 0 ${size * 2}px ${color};
            `;
            document.body.appendChild(sparkle);

            // Remove sparkle after animation
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1500);
        }
    }

    // Add CSS for sparkle animations
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        /* Hide default cursor */
        * {
            cursor: none !important;
        }
        
        /* Show default cursor on interactive elements for accessibility */
        a, button, input, textarea, select, [role="button"], [tabindex] {
            cursor: none !important;
        }
        
        /* Star Sparkle */
        .sparkle[data-type="star"] {
            clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
        }
        
        /* Circle Sparkle */
        .sparkle[data-type="circle"] {
            border-radius: 50%;
        }
        
        /* Diamond Sparkle */
        .sparkle[data-type="diamond"] {
            clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        
        /* Cross Sparkle */
        .sparkle[data-type="cross"] {
            clip-path: polygon(40% 0%, 60% 0%, 60% 40%, 100% 40%, 100% 60%, 60% 60%, 60% 100%, 40% 100%, 40% 60%, 0% 60%, 0% 40%, 40% 40%);
        }
        
        /* Triangle Sparkle */
        .sparkle[data-type="triangle"] {
            clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        
        /* Star Animation */
        @keyframes sparkle-animation-star {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            25% {
                opacity: 1;
                transform: scale(1.2) rotate(90deg);
            }
            50% {
                opacity: 1;
                transform: scale(1.5) rotate(180deg);
            }
            75% {
                opacity: 0.7;
                transform: scale(1.2) rotate(270deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
        
        /* Circle Animation */
        @keyframes sparkle-animation-circle {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            30% {
                opacity: 1;
                transform: scale(1.3) rotate(120deg);
            }
            60% {
                opacity: 0.8;
                transform: scale(1.1) rotate(240deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
        
        /* Diamond Animation */
        @keyframes sparkle-animation-diamond {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            40% {
                opacity: 1;
                transform: scale(1.4) rotate(180deg);
            }
            70% {
                opacity: 0.6;
                transform: scale(0.8) rotate(300deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
        
        /* Cross Animation */
        @keyframes sparkle-animation-cross {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            35% {
                opacity: 1;
                transform: scale(1.3) rotate(90deg);
            }
            65% {
                opacity: 0.7;
                transform: scale(1.1) rotate(270deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
        
        /* Triangle Animation */
        @keyframes sparkle-animation-triangle {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            30% {
                opacity: 1;
                transform: scale(1.2) rotate(120deg);
            }
            60% {
                opacity: 0.8;
                transform: scale(1.0) rotate(240deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
        
        .magic-wand-cursor {
            transition: all 0.1s ease;
        }
        
        .magic-wand-cursor:hover {
            transform: scale(1.2) rotate(15deg);
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Create floating particles for hero background
    function createHeroParticles() {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        const colors = ['var(--accent-lilac)', 'rgba(59, 130, 246, 0.6)', 'rgba(236, 72, 153, 0.5)', 'rgba(34, 197, 94, 0.4)'];
        const shapes = ['circle', 'square', 'triangle', 'star'];

        for (let i = 0; i < 35; i++) {
            const particle = document.createElement('div');
            particle.className = 'hero-particle';
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 6 + 2;

            let shapeStyle = '';
            if (shape === 'square') {
                shapeStyle = 'border-radius: 2px;';
            } else if (shape === 'triangle') {
                shapeStyle = 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);';
            } else if (shape === 'star') {
                shapeStyle = 'clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);';
            }

            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: ${color};
                border-radius: 50%;
                ${shapeStyle}
                opacity: ${Math.random() * 0.4 + 0.1};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float-particle-${shape} ${Math.random() * 15 + 15}s ease-in-out infinite;
                animation-delay: ${Math.random() * 15}s;
                z-index: 1;
                box-shadow: 0 0 ${size * 2}px ${color};
            `;
            hero.appendChild(particle);
        }
    }

    // Add CSS for particle animation
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes float-particle-circle {
            0%, 100% {
                transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
                opacity: 0.1;
            }
            25% {
                transform: translateY(-25px) translateX(15px) rotate(90deg) scale(1.1);
                opacity: 0.4;
            }
            50% {
                transform: translateY(-15px) translateX(-20px) rotate(180deg) scale(0.9);
                opacity: 0.2;
            }
            75% {
                transform: translateY(-35px) translateX(8px) rotate(270deg) scale(1.2);
                opacity: 0.5;
            }
        }

        @keyframes float-particle-square {
            0%, 100% {
                transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
                opacity: 0.1;
            }
            33% {
                transform: translateY(-30px) translateX(-10px) rotate(45deg) scale(1.15);
                opacity: 0.3;
            }
            66% {
                transform: translateY(-5px) translateX(25px) rotate(-45deg) scale(0.85);
                opacity: 0.2;
            }
        }

        @keyframes float-particle-triangle {
            0%, 100% {
                transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
                opacity: 0.1;
            }
            25% {
                transform: translateY(-20px) translateX(12px) rotate(120deg) scale(1.1);
                opacity: 0.4;
            }
            50% {
                transform: translateY(-10px) translateX(-18px) rotate(240deg) scale(0.9);
                opacity: 0.2;
            }
            75% {
                transform: translateY(-28px) translateX(5px) rotate(360deg) scale(1.3);
                opacity: 0.5;
            }
        }

        @keyframes float-particle-star {
            0%, 100% {
                transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
                opacity: 0.1;
            }
            20% {
                transform: translateY(-22px) translateX(8px) rotate(72deg) scale(1.2);
                opacity: 0.4;
            }
            40% {
                transform: translateY(-8px) translateX(-15px) rotate(144deg) scale(0.8);
                opacity: 0.2;
            }
            60% {
                transform: translateY(-32px) translateX(3px) rotate(216deg) scale(1.1);
                opacity: 0.3;
            }
            80% {
                transform: translateY(-12px) translateX(20px) rotate(288deg) scale(0.9);
                opacity: 0.2;
            }
        }
    `;
    document.head.appendChild(particleStyle);

    // Initialize magic wand cursor
    createMagicWandCursor();

    // Initialize hero particles
    createHeroParticles();

    // Initialize dynamic border effect for project showcase
    function initDynamicBorderEffect() {
        const projectShowcase = document.querySelector('.project-showcase');
        if (!projectShowcase) return;

        projectShowcase.addEventListener('mousemove', (e) => {
            const rect = projectShowcase.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Convert to percentage
            const xPercent = (x / rect.width) * 100;
            const yPercent = (y / rect.height) * 100;

            // Calculate angle from center
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const angle = Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);

            // Update CSS custom properties
            projectShowcase.style.setProperty('--mouse-x', xPercent + '%');
            projectShowcase.style.setProperty('--mouse-y', yPercent + '%');
            projectShowcase.style.setProperty('--mouse-angle', angle + 'deg');
        });

        // Reset when mouse leaves
        projectShowcase.addEventListener('mouseleave', () => {
            projectShowcase.style.setProperty('--mouse-x', '50%');
            projectShowcase.style.setProperty('--mouse-y', '50%');
            projectShowcase.style.setProperty('--mouse-angle', '0deg');
        });
    }

    // Initialize dynamic border effect
    initDynamicBorderEffect();

    // Add click event listener for sparkles
    document.addEventListener('click', (e) => {
        createSparkleEffect(e.clientX, e.clientY);
    });

    // Initialize event listeners
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger');

    navLinks.forEach(link => link.addEventListener('click', smoothScroll));

    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }

    // Add scroll event listener
    window.addEventListener('scroll', headerScrollEffect);

    // Add keyboard navigation support
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            const navMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');

            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        }
    });

    // Scroll-triggered animations for project and concept cards
    function initScrollAnimations() {
        const projectCards = document.querySelectorAll('.project-showcase');
        const seeMoreBtns = document.querySelectorAll('.see-more-btn');

        // Create Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.2, // Trigger when 20% of the element is visible
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add loaded class to trigger animation
                    entry.target.classList.add('loaded');

                    // Once animation is triggered, stop observing
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all project cards
        projectCards.forEach(card => {
            observer.observe(card);
        });

        // Observe all see more button containers
        const seeMoreContainers = document.querySelectorAll('.see-more-container');
        seeMoreContainers.forEach((container, index) => {
            const buttonObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && seeMoreBtns[index]) {
                        seeMoreBtns[index].classList.add('loaded');
                        buttonObserver.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            buttonObserver.observe(container);
        });
    }

    // See More Projects functionality (Projects Section)
    const seeMoreProjectsBtn = document.getElementById('seeMoreProjectsBtn');
    const hiddenProjectInProjects = document.querySelector('#projects .hidden-project');

    if (seeMoreProjectsBtn && hiddenProjectInProjects) {
        seeMoreProjectsBtn.addEventListener('click', function () {
            // Toggle the show class with a small delay for smoother animation
            if (!hiddenProjectInProjects.classList.contains('show')) {
                // Show the project
                hiddenProjectInProjects.classList.add('show');
                seeMoreProjectsBtn.classList.add('active');

                // Update button text
                const buttonText = seeMoreProjectsBtn.querySelector('.see-more-text');
                buttonText.textContent = 'See Less Projects';
            } else {
                // Hide the project
                hiddenProjectInProjects.classList.remove('show');
                seeMoreProjectsBtn.classList.remove('active');

                // Update button text
                const buttonText = seeMoreProjectsBtn.querySelector('.see-more-text');
                buttonText.textContent = 'See More Projects';
            }
        });
    }

    // See More Projects functionality (Concepts Section)
    const seeMoreBtn = document.getElementById('seeMoreBtn');
    const hiddenProjectInConcepts = document.querySelector('#concepts .hidden-project');

    if (seeMoreBtn && hiddenProjectInConcepts) {
        seeMoreBtn.addEventListener('click', function () {
            // Toggle the show class with optimized animation
            if (!hiddenProjectInConcepts.classList.contains('show')) {
                // Show the project
                hiddenProjectInConcepts.classList.add('show');
                seeMoreBtn.classList.add('active');

                // Update button text
                const buttonText = seeMoreBtn.querySelector('.see-more-text');
                buttonText.textContent = 'See Less Concepts';
            } else {
                // Hide the project
                hiddenProjectInConcepts.classList.remove('show');
                seeMoreBtn.classList.remove('active');

                // Update button text
                const buttonText = seeMoreBtn.querySelector('.see-more-text');
                buttonText.textContent = 'See More Concepts';
            }
        });
    }

    // See More Kit functionality (Kit Section)
    const seeMoreKitBtn = document.getElementById('seeMoreKitBtn');
    const hiddenProjectInKit = document.querySelector('#kit .hidden-project');

    if (seeMoreKitBtn && hiddenProjectInKit) {
        seeMoreKitBtn.addEventListener('click', function () {
            // Toggle the show class with optimized animation
            if (!hiddenProjectInKit.classList.contains('show')) {
                // Show the project
                hiddenProjectInKit.classList.add('show');
                seeMoreKitBtn.classList.add('active');

                // Update button text
                const buttonText = seeMoreKitBtn.querySelector('.see-more-text');
                buttonText.textContent = 'See Less Kit';
            } else {
                // Hide the project
                hiddenProjectInKit.classList.remove('show');
                seeMoreKitBtn.classList.remove('active');

                // Update button text
                const buttonText = seeMoreKitBtn.querySelector('.see-more-text');
                buttonText.textContent = 'See More Kit';
            }
        });
    }

    // Initialize scroll animations
    initScrollAnimations();

    // Contact Form Functionality
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Send email using EmailJS
            emailjs.send('service_iab89uq', 'template_dq96oiz', {
                name: name,
                email: email,
                subject: subject,
                message: message,
                sent_date: new Date().toLocaleString()
            })
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showNotification('Thank you! Your message has been sent successfully.', 'success');
                    contactForm.reset();
                }, function (error) {
                    console.log('FAILED...', error);
                    showNotification('Sorry, there was an error sending your message. Please try again.', 'error');
                })
                .finally(function () {
                    // Reset button state
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                });
        });
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? 'var(--primary-blue)' : type === 'error' ? '#ef4444' : 'var(--accent-lilac)'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 12px;
            box-shadow: var(--shadow-medium);
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
            font-family: 'Poppins', sans-serif;
        `;

        // Add notification content styles
        const content = notification.querySelector('.notification-content');
        content.style.cssText = `
            display: flex;
            align-items: center;
            gap: 0.75rem;
        `;

        // Add close button styles
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            margin-left: auto;
            padding: 0;
            line-height: 1;
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close functionality
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
}); 