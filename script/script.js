function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}

function hideSidebar() {
    const close = document.querySelector('.sidebar');
    close.style.display = "none";
}

document.addEventListener('DOMContentLoaded', () => {
    const user = document.querySelector('.hero-section .hero-content .titles .title u');
    if (!user) return;

    const newWords = ['GrowiT', 'Marketing', 'Design', 'Strategy', 'Digital', 'Influence', 'Top Mind', 'Analytic'];
    let i = 0;
    let buclePalabras;

    // Función para iniciar la rotación de palabras
    function iniciarRecorrido() {
        clearInterval(buclePalabras);
        buclePalabras = setInterval(() => {
            user.textContent = newWords[i];
            i = (i + 1) % newWords.length;
        }, 700);
    }

    iniciarRecorrido();

    user.addEventListener('mouseenter', () => {
        clearInterval(buclePalabras);
    });

    user.addEventListener('mouseleave', () => {
        iniciarRecorrido();
    });
});