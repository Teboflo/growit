const titulo = document.querySelector('.titles');
const data = document.querySelector('.hero-data');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let scroll = window.scrollY;
        let destit = scroll * -0.05;
        let desda = scroll * 0.05;

        titulo.style.transform = `translateX(${destit}px)`;
        data.style.transform = `translateX(${desda}px)`;
    }
});

const asection = document.querySelector('.about-us-section');
const aboutimg = document.querySelector('.about-img');
const princi = document.querySelector('.principios');
const abotext = document.querySelector('.about-main-text');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let topabo = asection.offsetTop;
        let scrollActual = window.scrollY;
        if (scrollActual >= topabo) {
            let scrollrelative = scrollActual - topabo;
            let desabo = scrollrelative * -0.3;
            let desabote = scrollrelative * -0.5;
            aboutimg.style.transform = `translateY(${desabo}px)`;
            princi.style.transform = `translateY(${desabo}px)`;
            abotext.style.transform = `translateY(${desabote}px)`;
        }
    }
});

const psection = document.querySelector('.problem-section');
const bloque = document.querySelector('.bloques');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let toppro = psection.offsetTop;
        let scrollActual = window.scrollY;
        if (scrollActual >= toppro) {
            let scrollrelative = scrollActual - toppro;
            let move = scrollrelative * -0.3;
            bloque.style.transform = `translateY(${move}px)`;
        }
    }
});

const sssectionuno = document.querySelector('.system-section');
const textsys = document.querySelector('.system-text');
const struct = document.querySelector('.estructura');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let topsys = sssectionuno.offsetTop;
        let scrollActual = window.scrollY;
        if (scrollActual >= topsys) {
            let scrollrelative = scrollActual - topsys;
            let movesys = scrollrelative * -0.3;
            textsys.style.transform = `translateY(${movesys}px)`;
            struct.style.transform = `translateY(${movesys}px)`;
        }
    }
});

const sssectiondos = document.querySelector('.system2-section');
const proceso = document.querySelectorAll('.proceso');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let topsysdos = sssectiondos.offsetTop;
        let scrollActual = window.scrollY;
        if (scrollActual >= topsysdos) {
            let scrollrelative = scrollActual - topsysdos;
            let movesysdos = scrollrelative * -0.3;
            proceso.forEach((elemento) => {
                elemento.style.transform = `translateY(${movesysdos}px)`;
            });
        }
    }
});

const sersection = document.querySelector('.performance-servicios-section');
const tarjeta = document.querySelectorAll('.tarjetas-service');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let topser = sersection.offsetTop;
        let scrollActual = window.scrollY;

        if (scrollActual >= topser) {
            let scrollrelative = scrollActual - topser;

            tarjeta.forEach((elemento, index) => {
                let fila = Math.floor(index / 2);
                let retraso = fila * 200;
                let movetar = (scrollrelative - retraso) * -0.3;
                if (scrollrelative > retraso) {
                    elemento.style.transform = `translateY(${movetar}px)`;
                }
            });
        } else {
            tarjeta.forEach((elemento) => {
                elemento.style.transform = `translateY(0px)`;
            });
        }
    }
});

const portsection = document.querySelector('.portafolio-section');
const porta = document.querySelector('.portafolio-content');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let topport = portsection.offsetTop;
        let scrollActual = window.scrollY;
        if (scrollActual >= topport) {
            let scrollrelative = scrollActual - topport;
            let moveporta = scrollrelative * -0.3;
            porta.style.transform = `translateY(${moveporta}px)`;
        }
    }
});
