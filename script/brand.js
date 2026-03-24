document.addEventListener('DOMContentLoaded', () => {
    const user = document.getElementById('hero-title');

    if (!user) return;

    const words = ['Tu Marca', 'Tu Estilo', 'Tu Presencia', 'Tu Imagen', 'Branding'];
    let i = 0;
    let buclePalabras = null;
    const palabraOriginal = user.textContent.trim();

    user.addEventListener('mouseenter', () => {
        if (buclePalabras) return;

        buclePalabras = setInterval(() => {
            // Cambiamos el texto
            user.textContent = words[i];
            i = (i + 1) % words.length;

            // TRUCO PRO: Refrescamos el elemento para que el gradiente CSS se reaplique
            user.style.display = 'inline-block';
            user.offsetHeight; // Esto fuerza al navegador a redibujar
            user.style.display = 'block';
        }, 350); // Un poco más lento para que se aprecie el efecto
    });

    user.addEventListener('mouseleave', () => {
        clearInterval(buclePalabras);
        buclePalabras = null;
        user.textContent = palabraOriginal;
    });
});

const title = document.querySelector('.servicio');
const logan = document.querySelector('.logan')

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
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
    if (window.innerWidth > 768) {
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
    if (window.innerWidth > 768) {
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