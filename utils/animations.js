function initializeAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .project-card, .card-gradient').forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', initializeAnimations);
