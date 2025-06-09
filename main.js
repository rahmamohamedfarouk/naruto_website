document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    setTimeout(function() {
        document.querySelector('.loading-screen').style.opacity = '0';
        setTimeout(function() {
            document.querySelector('.loading-screen').style.display = 'none';
        }, 500);
    }, 1500);

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Back to top button
    const backToTopBtn = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function() {
        backToTopBtn.classList.toggle('active', window.scrollY > 300);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and panes
            tabBtns.forEach(btn => btn.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Add active class to clicked button and corresponding pane
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Village markers functionality
    const villageMarkers = document.querySelectorAll('.village-marker');
    const villageDetails = document.querySelectorAll('.village-details');

    villageMarkers.forEach(marker => {
        marker.addEventListener('click', function() {
            const villageId = this.getAttribute('data-village');
            
            // Remove active class from all details
            villageDetails.forEach(detail => detail.classList.remove('active'));
            
            // Add active class to corresponding detail
            document.getElementById(`${villageId}-details`).classList.add('active');
        });
    });

    // Gallery filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.reveal');

    function checkReveal() {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);

    // Character stats animation
    const characterCards = document.querySelectorAll('.character-card');

    characterCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const statBars = this.querySelectorAll('.stat-fill');
            statBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 10);
            });
        });
    });

    // Random kunai animation
    function createKunai() {
        const kunai = document.createElement('div');
        kunai.className = 'kunai';
        kunai.style.left = `${Math.random() * 100}vw`;
        kunai.style.top = `${Math.random() * 100}vh`;
        document.body.appendChild(kunai);
        
        setTimeout(() => {
            kunai.remove();
        }, 2000);
    }

    // Create kunai every 3 seconds
    setInterval(createKunai, 3000);

    // Smoke bomb effect on click
    document.addEventListener('click', function(e) {
        const smoke = document.createElement('div');
        smoke.className = 'smoke-bomb';
        smoke.style.left = `${e.clientX - 50}px`;
        smoke.style.top = `${e.clientY - 50}px`;
        document.body.appendChild(smoke);
        
        setTimeout(() => {
            smoke.remove();
        }, 2000);
    });
});