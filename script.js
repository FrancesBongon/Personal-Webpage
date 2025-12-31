function showSection(targetId) {
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    document.querySelectorAll('.nav-links a').forEach(navLink => {
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
