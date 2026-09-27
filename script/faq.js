document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.accordion');

    botones.forEach(boton => {
        boton.addEventListener('click', function () {
            // 1. Alternamos una clase para el botón (flecha)
            this.classList.toggle('is-open');

            // 2. Buscamos el panel que está justo después del botón
            const panel = this.nextElementSibling;

            // 3. Alternamos la clase .show que tiene el 'display: block'
            if (panel.classList.contains('show')) {
                panel.classList.remove('show');
            } else {
                panel.classList.add('show');
            }
        });
    });
});