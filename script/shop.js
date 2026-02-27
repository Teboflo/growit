const productos = [
    { id: 'ccbasic', titulo: 'Starter Presence', imagen: '../../image/graphic/cc.png', categoria: { nombre: 'Community Catalyst', id: 'cc' }, precio: '64.99', href: '../community.html' },
    { id: 'ccadvance', titulo: 'Growth Presence', imagen: '../../image/graphic/cc.png', categoria: { nombre: 'Community Catalyst', id: 'cc' }, precio: '84.99', href: '../community.html' },
    { id: 'ccpremium', titulo: 'Authority Presence', imagen: '../../image/graphic/cc.png', categoria: { nombre: 'Community Catalyst', id: 'cc' }, precio: '119.99', href: '../community.html' },
    { id: 'wisbasic', titulo: 'Starter Site', imagen: '../../image/graphic/wis.png', categoria: { nombre: 'Web Impact Studio', id: 'wis' }, precio: '169.99', href: '../web-impact.html' },
    { id: 'wisadvance', titulo: 'Growth Site', imagen: '../../image/graphic/wis.png', categoria: { nombre: 'Web Impact Studio', id: 'wis' }, precio: '249.99', href: '../web-impact.html' },
    { id: 'wispremium', titulo: 'Authority Site', imagen: '../../image/graphic/wis.png', categoria: { nombre: 'Web Impact Studio', id: 'wis' }, precio: '379.99', href: '../web-impact.html' },
    { id: 'bione', titulo: 'Brand Identity', imagen: '../../image/graphic/bi.png', categoria: { nombre: 'Brand Identity', id: 'bi' }, precio: '99.99', href: '../brand.html' },
    { id: 'dhbbasic', titulo: 'Data Report', imagen: '../../image/graphic/dhs.png', categoria: { nombre: 'Data Hub Board', id: 'dhb' }, precio: '119.99', href: '../data-hub.html' },
    { id: 'dhbadvance', titulo: 'Smart Dashboard', imagen: '../../image/graphic/dhs.png', categoria: { nombre: 'Data Hub Board', id: 'dhb' }, precio: '249.99', href: '../data-hub.html' },
    { id: 'dhbpremium', titulo: 'Advanced Data System', imagen: '../../image/graphic/dhs.png', categoria: { nombre: 'Data Hub Board', id: 'dhb' }, precio: '399.99', href: '../data-hub.html' },
    { id: 'sfsone', titulo: 'Sale Flow System', imagen: '../../image/graphic/sfs.png', categoria: { nombre: 'Sale Flow System', id: 'sfs' }, precio: '149.99', href: '../sale-flow.html' },
];

const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategoria = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar');
const numerito = document.querySelector('#numerito');

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = '';

    productosElegidos.forEach(producto => {

        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
                    <img class="producto-img" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-title">${producto.titulo}</h3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <div class="botones-producto">
                            <a class="producto-ver" href="${producto.href}">Ver <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                                    <path
                                        d="M12 5c-7.63 0-9.93 6.62-9.95 6.68-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68s9.93-6.62 9.95-6.68c.07-.21.07-.43 0-.63C21.93 11.61 19.63 5 12 5m0 12c-5.35 0-7.42-3.84-7.93-5 .5-1.16 2.58-5 7.93-5s7.42 3.85 7.93 5c-.5 1.16-2.58 5-7.93 5">
                                    </path>
                                    <path
                                        d="M13.5 12c-.83 0-1.5-.67-1.5-1.5 0-.6.36-1.12.87-1.35-.28-.09-.56-.15-.87-.15-1.64 0-3 1.36-3 3s1.36 3 3 3 3-1.36 3-3c0-.3-.06-.59-.15-.87-.24.51-.75.87-1.35.87">
                                    </path>
                                </svg></a>
                            <button class="producto-agregar" id="${producto.id}" >Agregar <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                    height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                                    <path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path>
                                </svg></button>
                        </div>
                    </div>`;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategoria.forEach(boton => {
    boton.addEventListener('click', (e) => {
        botonesCategoria.forEach(boton => boton.classList.remove('active'));
        e.currentTarget.classList.add('active');

        if (e.currentTarget.id != 'todos') {
            const productCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productCategoria.categoria.nombre;
            const botonElegido = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(botonElegido);
        } else {
            tituloPrincipal.innerText = 'Todos los Productos';
            cargarProductos(productos);
        }
    });
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll('.producto-agregar');
    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlCarrito);
    });
}

let productosEnCarritoLS = localStorage.getItem('On-Shop');

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);;
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();

    localStorage.setItem('On-Shop', JSON.stringify(productosEnCarrito));
};

function actualizarNumerito() {
    let newMerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = newMerito;
};