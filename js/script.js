$(document).ready(function () {
    // Variables para el sobre, el botón de abrir y el botón de reiniciar
    var envelope = $("#envelope"); // Selecciona el elemento con id "envelope" y lo guarda en la variable envelope
    var btn_open = $("#open"); // Selecciona el elemento con id "open" y lo guarda en la variable btn_open
    var btn_reset = $("#reset"); // Selecciona el elemento con id "reset" y lo guarda en la variable btn_reset

    // Evento de clic para el sobre para abrirlo
    envelope.click(function () {
    open(); // Llama a la función open cuando se hace clic en el sobre
    });

    // Evento de clic para el botón de abrir para abrir el sobre
    btn_open.click(function () {
    open(); // Llama a la función open cuando se hace clic en el botón de abrir
    });

    // Evento de clic para el botón de reiniciar para cerrar el sobre
    btn_reset.click(function () {
    close(); // Llama a la función close cuando se hace clic en el botón de reiniciar
    });

    // Función para abrir el sobre añadiendo la clase "open" y eliminando la clase "close"
    function open() {
    envelope.addClass("open").removeClass("close"); // Añade la clase "open" y elimina la clase "close" del sobre
    }

    // Función para cerrar el sobre añadiendo la clase "close" y eliminando la clase "open"
    function close() {
    envelope.addClass("close").removeClass("open"); // Añade la clase "close" y elimina la clase "open" del sobre
    }
});