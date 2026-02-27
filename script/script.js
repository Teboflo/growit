function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = "flex"
}

function hideSidebar() {
    const close = document.querySelector('.sidebar')
    close.style.display = "none"
}

const user = document.querySelector('.hero-section .hero-content .titles .title u');
const newWords = ['Marketing', 'Design', 'Strategy', 'Digital', 'Influence', 'Top Mind', 'Analytic'];
let i = 0;

user.addEventListener('mouseenter', () => {
    clearInterval(buclePalabras);
    buclePalabras = setInterval(() => {
        user.textContent = newWords[i];
        i = (i + 1) % newWords.length;
    }, 250);
});

let buclePalabras;
const original = user.textContent;

user.addEventListener('mouseleave', () => {
    clearInterval(buclePalabras);
    user.textContent = original;
});