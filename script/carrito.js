const opacidad = document.querySelector('.numerito');
opacidad.style.opacity = 0;
const display = document.querySelector('.boton-carrito');
document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 768) {
        display.style.display = 'none';
    }
});


let productosEnCarrito = (localStorage.getItem('On-Shop'));
productosEnCarrito = JSON.parse(productosEnCarrito);
const carritoVacio = document.querySelector('#vacio');
const carritoLleno = document.querySelector('#productos-en-carrito');
const cta = document.querySelector('#ctas');
let eliminar = document.querySelectorAll('.trash')
const botonVaciar = document.querySelector('#boton-vaciar');
const total = document.querySelector('#total');
const comprar = document.querySelector('#buy');

function cargarCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        carritoVacio.classList.add('disabled');
        carritoLleno.classList.remove('disabled');
        cta.classList.remove('disabled');

        carritoLleno.innerHTML = " ";

        productosEnCarrito.forEach(producto => {
            const div = document.createElement('div');
            div.classList.add('carrito-producto');
            div.innerHTML = `<img class="carrito-img" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="carrito-producto-title">
                            <small>Servicio</small>
                            <h3>${producto.titulo}</h3>
                        </div>
                        <div class="carrito-producto-cantidad">
                            <small>Cantidad</small>
                            <p>${producto.cantidad}</p>
                        </div>
                        <div class="carrito-producto-precio">
                            <small>Precio</small>
                            <p>$${producto.precio}</p>
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>$${(producto.precio * producto.cantidad).toFixed(2)}</p>
                        </div>
                        <button class="trash" id="${producto.id}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" viewBox="0 0 24 24">
                                <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                                <path d="M10 7.5h7v2h-7z"></path>
                                <path
                                    d="M17.31 14H9.72L5.95 2.68A1 1 0 0 0 5 2H2v2h2.28l3.54 10.63A2 2 0 0 0 9.72 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35-1.87-.7zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4">
                                </path>
                            </svg></button>`;
            carritoLleno.append(div);
        });

    } else {
        carritoVacio.classList.remove('disabled');
        carritoLleno.classList.add('disabled');
        cta.classList.add('disabled');
    }

    actualizarBotonesEliminar();
    actualizarTotal();
};

cargarCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll('.trash');
    botonesEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito.splice(index, 1);
    cargarCarrito();
    localStorage.setItem('On-Shop', JSON.stringify(productosEnCarrito));
};


botonVaciar.addEventListener('click', vaciarCarrito);

function vaciarCarrito() {
    productosEnCarrito.length = 0;
    localStorage.setItem('On-Shop', JSON.stringify(productosEnCarrito));
    cargarCarrito();
}

function actualizarTotal() {
    const totalCalculado = (productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0)).toFixed(2);
    total.innerHTML = `$${totalCalculado}`;
};

comprar.addEventListener('click', comprarCarrito);

function comprarCarrito() {
    const celular = '5930998359537';
    let mensaje = '*Pedido Servicios - GrowiT*\n';
    mensaje += '-----------------------------\n';

    productosEnCarrito.forEach((producto, index) => {
        mensaje += `*${index + 1}.  ${producto.titulo}*\n`;
        mensaje += `        Cantidad: ${producto.cantidad}\n`;
        mensaje += `        Subtotal: $${(producto.precio * producto.cantidad).toFixed(2)}\n`;
    });

    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    mensaje += "-----------------------------\n";
    mensaje += `*TOTAL A PAGAR: $${totalCalculado.toFixed(2)}*\n\n`;
    mensaje += "_¿Me confirmarían la disponibilidad de estos servicios?_";

    const url = `https://wa.me/${celular}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
};