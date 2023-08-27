// EN ESTE DOCUMENTO JS VAMOS A TENER LA PRIMER FUNCION LLAMADA "scrollToTopButton" QUE NOS PERMITE DARLE UN SCROLL "SUAVE" AL BOTON CON LA FLECHA HACIA ARRIBA, LO CUAL ES IMPORTANTE PARA MEJORAR LA EXPERIENCIA DEL USUARIO AL SER UNA LANDING PAGE , LUEGO VAMOS A TENERLA FUNCION "mostrarAgradecimiento" EL CUAL SERIA UNA VALIDACION DE LAS MUCHAS QUE PODEMOS HACER CON JS, ESTA FUNCION NOS VA A PERMITIR MOTSTRAR UN MENSAJE DE AGRADECIMIENTO CUANDO EL USUARIO COMPLETE EL FORMULARIO.



// Utilizamos addEventListener para crear un evento que se activa cuando el contenido del DOM ha sido cargado ( el DOM es como un mapa organizado de una página web que el navegador usa para saber qué mostrar en tu pantalla)
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopButton = document.getElementById("scrollToTop");



    // Desplazarse suavemente hacia la parte superior al hacer clic en la flecha 
    scrollToTopButton.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


// Función para mostrar un mensaje de agradecimiento
function mostrarAgradecimiento() {
    const formulario = document.getElementById("contactform");
    formulario.innerHTML = "<h3>¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.</h3>";
}

// Agregar un manejador de eventos al formulario
document.getElementById("contactform").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
    mostrarAgradecimiento();
});
