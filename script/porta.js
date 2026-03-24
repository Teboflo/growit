const title = document.querySelector('.title');
const botones = document.querySelector('.social-botones');
const descripcion = document.querySelector('.descrip');
const imagen = document.querySelector('.right-hero');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let scroll = window.scrollY;
        let move = scroll * -0.3;

        title.style.transform = `translateY(${move}px)`;
        botones.style.transform = `translateY(${move}px)`;
        descripcion.style.transform = `translateY(${move}px)`;
        imagen.style.transform = `translateY(${move}px)`;
    }
});

const secAbout = document.querySelector('.about-section');
const aboTitle = document.querySelector('.title-about');
const aboText = document.querySelector('.text-about');

window.addEventListener('scroll', () => {
    if (window.innerWidth > 768) {
        let topabo = secAbout.offsetTop;
        let scrollRelative = window.scrollY;
        if (scrollRelative >= topabo) {
            let scrollActual = scrollRelative - topabo;
            let moves = scrollActual * -0.3;
            aboTitle.style.transform = `translateY(${moves}px)`;
            aboText.style.transform = `translateY(${moves}px)`;
        }
    }
});