document.addEventListener('DOMContentLoaded', () => {
    const user = document.getElementById('hero-title');

    if (!user) return;

    const words = ['Brand Identity', 'Tu Marca', 'Tu Estilo', 'Tu Presencia', 'Tu Imagen', 'Branding'];
    let i = 0;
    let buclePalabras = null;

    function cambiarPalabra() {
        user.textContent = words[i];
        i = (i + 1) % words.length;

        user.style.display = 'inline-block';
        user.offsetHeight;
        user.style.display = 'block';
    }

    function iniciarRecorrido() {
        if (buclePalabras) return;
        buclePalabras = setInterval(cambiarPalabra, 700);
    }

    function detenerRecorrido() {
        clearInterval(buclePalabras);
        buclePalabras = null;
    }

    iniciarRecorrido();

    user.addEventListener('mouseenter', detenerRecorrido);

    user.addEventListener('mouseleave', iniciarRecorrido);
});


const title = document.querySelector('.servicio');
const logan = document.querySelector('.logan');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768 && title && logan) {
        let scroll = window.scrollY;
        let move = scroll * -0.3;
        title.style.transform = `translateY(${move}px)`;
        logan.style.transform = `translateY(${move}px)`;
    }
});

const aimsec = document.querySelector('.aim-section');
const strategy = document.querySelector('.estrategia');
const objetivo = document.querySelector('.objetivo');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768 && aimsec && strategy && objetivo) {
        let topaim = aimsec.offsetTop;
        let topmind = topaim - 200;
        let scrollActual = window.scrollY;
        if (scrollActual >= topmind) {
            let scrollRelative = scrollActual - topmind;
            let move = scrollRelative * -0.3;
            strategy.style.transform = `translateY(${move}px)`;
            objetivo.style.transform = `translateY(${move}px)`;
        }
    }
});

const pricesection = document.querySelector('.pricing-section');
const precio = document.querySelector('.price');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768 && pricesection && precio) {
        let topprice = pricesection.offsetTop;
        let topreal = topprice - 150;
        let scrollActual = window.scrollY;
        if (scrollActual >= topreal) {
            let scrollRelative = scrollActual - topreal;
            let moveprice = scrollRelative * -0.6;
            precio.style.transform = `translateY(${moveprice}px)`;
        }
    }
});