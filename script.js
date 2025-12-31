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
