const hero = document.querySelector('.hero-left');
const heroimg = document.querySelector('.hero-right');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let scroll = window.scrollY;
        let move = scroll * -0.3;
        hero.style.transform = `translateY(${move}px)`;
        heroimg.style.transform = `translateY(${move}px)`;
    }
});


const aimsec = document.querySelector('.aim-section');
const objetivo = document.querySelector('.objetivo');
const estrategia = document.querySelector('.estrategia');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let topaim = aimsec.offsetTop;
        let scrollActual = window.scrollY;
        if (scrollActual >= topaim) {
            let scrollrelative = scrollActual - topaim;
            let move = scrollrelative * -0.3;
            objetivo.style.transform = `translateY(${move}px)`;
            estrategia.style.transform = `translateY(${move}px)`;
        } else {
            objetivo.style.transform = `translateY(0px)`;
            estrategia.style.transform = `translateY(0px)`;
        }
    }
});

const pricesec = document.querySelector('.price-section');
const conecto = document.querySelector('.conector');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let toppri = pricesec.offsetTop;
        let scrollActual = window.scrollY;
        if (scrollActual >= toppri) {
            let scrollrelative = scrollActual - toppri;
            let move = scrollrelative * -0.3;
            conecto.style.transform = `translateY(${move}px)`;
        }
    }
});