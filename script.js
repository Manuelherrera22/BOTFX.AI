document.addEventListener('DOMContentLoaded', () => {
    // Accordion Logic
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Toggle active class on current item
            const isActive = item.classList.contains('active');
            
            // If you want only one open at a time, uncomment the next 3 lines:
            // document.querySelectorAll('.accordion-item').forEach(acc => {
            //     acc.classList.remove('active');
            // });

            if (!isActive) {
                item.classList.add('active');
                // Change plus to cross for Flaticon
                const icon = header.querySelector('i');
                if (icon) {
                    icon.className = 'fi fi-br-cross';
                }
            } else {
                item.classList.remove('active');
                const icon = header.querySelector('i');
                if (icon) {
                    icon.className = 'fi fi-br-plus';
                }
            }
        });
    });

    // Optional: add subtle reveal animations on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation to elements
    const fadeElements = document.querySelectorAll('.card, .bento-card, .step-item, .pricing-card, .testimonial-card');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
});
