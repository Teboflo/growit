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



const trabajos = [
    { id: 'webpage', titulo: 'Web', subtitle: 'Page', imagen: '../image/porta/web.png', categoria: { nombre: 'Web Design', id: 'web' }, link: 'https://teboflo.github.io/one-connetion/', texto: 'Diseño web estructurado con enfoque en experiencia de usuario y jerarquía visual' },
    { id: 'landing', titulo: 'Landing', subtitle: 'Page', imagen: '../image/porta/land.png', categoria: { nombre: 'Web Design', id: 'web' }, link: 'https://voxel-tebo.netlify.app/', texto: 'Landing page enfocada en conversión con estructura simple y mensajes directos' },
    { id: 'wedding', titulo: 'Wedding', subtitle: 'Invitation', imagen: '../image/porta/wedd.png', categoria: { nombre: 'Web Design', id: 'web' }, link: 'https://teboflor.github.io/boda-ale-dany/', texto: 'Experiencia digital elegante y funcional para eventos especiales' }
];

const proyectosContent = document.querySelector('#contenedor-proyectos');
const indice = document.querySelectorAll('.indice');

function cargarTrabajos(proyectosElegidos) {
    proyectosContent.innerHTML = '';

    proyectosElegidos.forEach(trabajos => {
        const div = document.createElement('div');
        div.classList.add('proyecto');
        div.innerHTML = `<div class="proyect-left">
                        <img src="${trabajos.imagen}" alt="${trabajos.titulo}" class="proyect-img">
                    </div>
                    <div class="proyect-right">
                        <h3 class="title">
                            <u>${trabajos.titulo}</u> ${trabajos.subtitle}
                        </h3>
                        <p class="proyect-text">
                            ${trabajos.texto}
                        </p>
                        <a href="${trabajos.link}" class="proyect-cta" target="_blank">Visita el Sitio</a>
                    </div>`;


        proyectosContent.append(div);
    });
}

cargarTrabajos(trabajos);

indice.forEach(boton => {
    boton.addEventListener('click', (e) => {
        if (e.currentTarget.id != 'todos') {
            const botonElegido = trabajos.filter(proyecto => proyecto.categoria.id === e.currentTarget.id);
            cargarTrabajos(botonElegido);
        } else {
            cargarTrabajos(botonElegido);
        }
    });
});