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
    { id: 'webpage', titulo: 'Web', subtitle: 'Page', imagen: '../image/porta/web.webp', categoria: { nombre: 'Web Design', id: 'web' }, link: 'https://teboflo.github.io/one-connetion/', texto: 'Diseño web estructurado con enfoque en experiencia de usuario y jerarquía visual', cta: 'Visita el Sitio' },
    { id: 'landing', titulo: 'Landing', subtitle: 'Page', imagen: '../image/porta/land.webp', categoria: { nombre: 'Web Design', id: 'web' }, link: 'https://voxel-tebo.netlify.app/', texto: 'Landing page enfocada en conversión con estructura simple y mensajes directos', cta: 'Visita el Sitio' },
    { id: 'wedding', titulo: 'Wedding', subtitle: 'Invitation', imagen: '../image/porta/wedd.webp', categoria: { nombre: 'Web Design', id: 'web' }, link: 'https://teboflor.github.io/boda-ale-dany/', texto: 'Experiencia digital elegante y funcional para eventos especiales', cta: 'Visita el Sitio' },
    { id: 'posters', titulo: 'Instagram', subtitle: 'Post', imagen: '../image/porta/inst.webp', categoria: { nombre: 'Insta Post', id: 'post' }, link: 'https://www.instagram.com/growit.performance', texto: 'Post que combinan diseño estratégico y enfoque visual para aumentar retención, interacción y reconocimiento de marca', cta: 'Ver Posts' },
    { id: 'prosanita', titulo: 'Prosanita', subtitle: 'Brand-kit', imagen: '../image/porta/pro.webp', categoria: { nombre: 'Brand Kit', id: 'brand' }, link: 'https://www.instagram.com/pro.sanita', texto: 'Estilo de Marca Hand-Lettering minimalista & moderno, diseño y arquitectura de marca de manera profesional ', cta: 'Ir a Perfil' },
    { id: 'growit', titulo: 'GrowiT', subtitle: 'Brand-kit', imagen: '../image/porta/gro.webp', categoria: { nombre: 'Brand Kit', id: 'brand' }, link: 'https://www.instagram.com/growit.performance', texto: 'Marca Minimalista estilo Isologo moderno, construcción de marca en base a la visión de crecimiento digital', cta: 'Ir a Perfil' },
    { id: 'one', titulo: 'One Connection', subtitle: 'Brand-kit', imagen: '../image/porta/one.webp', categoria: { nombre: 'Brand Kit', id: 'brand' }, link: 'notfound.html', texto: 'Modelo de Marca Sencillo estilo minimalista isotipo representativo de valores y misión estratégica de la empresa', cta: 'No Disponible' }
];

const proyectosContent = document.querySelector('#contenedor-proyectos');
const indice = document.querySelectorAll('.indice');

function cargarTrabajos(proyectosElegidos) {
    proyectosContent.innerHTML = '';

    proyectosElegidos.forEach(proyecto => {
        const div = document.createElement('div');
        div.classList.add('proyecto');
        div.innerHTML = `
            <div class="proyect-left">
                <img src="${proyecto.imagen}" alt="${proyecto.titulo}" class="proyect-img">
            </div>
            <div class="proyect-right">
                <h3 class="title">
                    <u>${proyecto.titulo}</u> ${proyecto.subtitle}
                </h3>
                <p class="proyect-text">
                    ${proyecto.texto}
                </p>
                <a href="${proyecto.link}" class="proyect-cta" target="_blank">${proyecto.cta}</a>
            </div>`;
        proyectosContent.append(div);
    });
}


indice.forEach(boton => {
    boton.addEventListener('click', (e) => {

        indice.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (e.currentTarget.id !== 'todos') {
            const proyectosFiltrados = trabajos.filter(proyecto => proyecto.categoria.id === e.currentTarget.id);
            cargarTrabajos(proyectosFiltrados);
        } else {
            cargarTrabajos(trabajos);
        }
    });
});