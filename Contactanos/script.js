document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío real del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validación simple de los campos
    if (name === '' || email === '' || message === '') {
        showResponseMessage('Por favor, completa todos los campos.', 'error');
    } else {
        // Simulación de envío de formulario
        showResponseMessage('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.', 'success');
    }
});

// Función para mostrar el mensaje de respuesta
function showResponseMessage(message, type) {
    const responseMessageDiv = document.getElementById('response-message');
    responseMessageDiv.textContent = message;
    responseMessageDiv.className = type; 
}