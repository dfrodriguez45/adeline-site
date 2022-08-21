// Función para activar los elementos del navbar cuando se haga scroll y se pase por
// las secciones.
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const navLink = document.querySelectorAll('header nav ul li a');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        // Cambia el navlink un poco antes de entrar en la section.
        if (scrollY >= (sectionTop - sectionHeight / 4)) {
            current = section.getAttribute('id');
        }
    });

    navLink.forEach(a => {
        a.classList.remove('active');
        if (a.classList.contains(current)) {
            a.classList.add('active');
        }
    });
});