// Escucha el evento 'DOMContentLoaded', que se dispara cuando el DOM está completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
    // Cambia la opacidad del cuerpo a 1, haciendo que el contenido aparezca gradualmente (en combinación con la transición en el CSS).
    document.body.style.opacity = '1';
});

// Define una función para redirigir a otra página con una transición suave.
function redirectToMain() {
    // Cambia la opacidad del cuerpo a 0, iniciando una transición de desvanecimiento.
    document.body.style.opacity = '0';
    
    // Usa `setTimeout` para esperar 1 segundo antes de redirigir al usuario (sincronizado con la transición CSS).
    setTimeout(() => {
        // Redirige al usuario a la página 'main.html'.
        window.location.href = 'main.html';
    }, 1000); // Espera 1000ms (1 segundo).
}
