function showSection(targetId) {
    dconst sections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 1. Remove active class from all sections
    sections.forEach(section => {
        section.classList.remove('active');
        // Briefly hide from display to reset the animation state
        section.style.display = 'none'; 
    });

    // 2. Prepare the target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.style.display = 'flex'; // Set display first
        
        // Use a tiny timeout so the browser registers the display change 
        // before applying the opacity/transform animation
        setTimeout(() => {
            targetSection.classList.add('active');
        }, 10);
    }

    // 3. Update Nav Links
    navLinks.forEach(navLink => {
        navLink.classList.remove('active');
        if (navLink.getAttribute('data-target') === targetId) {
            navLink.classList.add('active');
        }
    });
    
    window.location.hash = targetId;
}

document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        showSection(targetId);
    });
});

window.addEventListener('load', () => {
    const currentHash = window.location.hash.replace('#', '');
    
    if (currentHash) {
        showSection(currentHash);
    } else {
        showSection('home');
    }
});

document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.contact-item').forEach(i => i.classList.remove('clicked'));
        this.classList.add('clicked');
    });
});
