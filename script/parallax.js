const titulo = document.querySelector('.titles');
const descrip = document.querySelector('.hero-data');

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    let destit = scroll * -0.05;
    let desdes = scroll * 0.05;
    titulo.style.transform = `translateX(${destit}px)`;
    descrip.style.transform = `translateX(${desdes}px)`;
});

const user = document.querySelector('.hero-section .hero-content .titles .title u');
const newWords = ['Marketing', 'Design', 'Strategy', 'Digital', 'Influence'];
let i = 0;

user.addEventListener('mouseenter', () => {
    clearInterval(buclePalabras);
    buclePalabras = setInterval(() => {
        user.textContent = newWords[i];
        i = (i + 1) % newWords.length;
    }, 1000);
});

let buclePalabras;
const original = user.textContent;

user.addEventListener('mouseleave', () => {
    clearInterval(buclePalabras);
    user.textContent = original;
});