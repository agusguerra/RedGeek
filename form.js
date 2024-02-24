document.getElementById('form-card').addEventListener('submit', function(event) {
    // event.preventDefault(); // Evita el envío predeterminado del formulario

    // Resto del código de validación y redirección aquí
});


document.getElementById('form-card').addEventListener('submit', function(event) {
    var campos = ['service', 'first-name', 'last-name', 'email', 'how']; // Agrega aquí los IDs de todos los campos que quieras validar
    
    for (var i = 0; i < campos.length; i++) {
        var campo = document.getElementById(campos[i]);
        var error = document.getElementById('error-' + campos[i]);
        if (campo.value === '') {
            // event.preventDefault();
            campo.style.borderColor = 'red';
            if (error) {
                error.style.display = 'block';
            }
            // Ajusta el desplazamiento aquí
            campo.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        } else {
            campo.style.borderColor = ''; // Restaurar el borde a su estado normal si se completa el campo
            if (error) {
                error.style.display = 'none'; // Ocultar el mensaje de error si se completa el campo
            }
        }
    }
    
    var consent = document.getElementById('consent');
    var consentError = document.getElementById('error-consent');
    if (!consent.checked) {
        // event.preventDefault();
        consent.style.outline = '1px solid red';
        if (consentError) {
            consentError.style.display = 'block';
        }
        // Ajusta el desplazamiento aquí
        document.getElementById('form-card').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    } else {
        consent.style.outline = ''; // Restaurar el borde a su estado normal si se completa el campo de consentimiento
        if (consentError) {
            consentError.style.display = 'none'; // Ocultar el mensaje de error si se completa el campo de consentimiento
        }
    }
    
    var how = document.getElementById('how');
    var howError = document.getElementById('error-how');
    if (how.value === '') {
        // event.preventDefault();
        how.style.borderColor = 'red';
        if (howError) {
            howError.style.display = 'block';
        }
        // Ajusta el desplazamiento aquí
        how.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    } else {
        how.style.borderColor = ''; // Restaurar el borde a su estado normal si se completa el campo
        if (howError) {
            howError.style.display = 'none'; // Ocultar el mensaje de error si se completa el campo
        }
    }
    
    var email = document.getElementById('email');
    var emailError = document.getElementById('error-email');
    if (!isValidEmail(email.value)) {
        // event.preventDefault();
        email.style.borderColor = 'red';
        if (emailError) {
            emailError.style.display = 'block';
        }
        // Ajusta el desplazamiento aquí
        email.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    } else {
        email.style.borderColor = ''; // Restaurar el borde a su estado normal si se completa el campo
        if (emailError) {
            emailError.style.display = 'none'; // Ocultar el mensaje de error si se completa el campo
        }
    }
});

function isValidEmail(email) {
    // Expresión regular para validar el formato de correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validarFormulario() {
    var campos = ['service', 'first-name', 'last-name', 'email', 'how']; 
    var hayErrores = false; // Variable para rastrear si hay errores

    campos.forEach(function(campoId) {
        var campo = document.getElementById(campoId);
        var error = document.getElementById('error-' + campoId);
        
        // Verifica si el campo está vacío o no
        if (campo.value.trim() === '') {
            campo.style.borderColor = 'red';
            error.style.display = 'block';
            hayErrores = true; // Marca que hay al menos un error
        } else {
            campo.style.borderColor = ''; // Restaura el borde a su estado original
            error.style.display = 'none'; // Oculta el mensaje de error
        }
    });

    // Verifica el consentimiento
    var consent = document.getElementById('consent');
    var errorConsent = document.getElementById('error-consent');
    if (!consent.checked) {
        consent.style.outline = '1px solid red';
        errorConsent.style.display = 'block';
        hayErrores = true;
    } else {
        consent.style.outline = '';
        errorConsent.style.display = 'none';
    }

    // Verifica el formato del correo electrónico
    var email = document.getElementById('email');
    var errorEmail = document.getElementById('error-email');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo
    if (!emailRegex.test(email.value)) {
        email.style.borderColor = 'red';
        errorEmail.style.display = 'block';
        hayErrores = true;
    } else {
        email.style.borderColor = '';
        errorEmail.style.display = 'none';
    }

    return !hayErrores; // Devuelve verdadero si no hay errores, falso de lo contrario
}

// Agregar el evento de escucha para la validación del formulario
document.getElementById('form-card').addEventListener('submit', function(event) {
    if (!validarFormulario()) {
        // event.preventDefault(); // Evita el envío del formulario si hay errores
    }
    else {
    // Si no hay errores, redirige al usuario a la página "thank-you"
        console.log('redirigiendo..')
        window.location.href = "thank-you.html";
    }
});

// Agregar eventos de escucha para validar los campos cuando cambian
document.getElementById('service').addEventListener('change', validarFormulario);
document.getElementById('first-name').addEventListener('input', validarFormulario);
document.getElementById('last-name').addEventListener('input', validarFormulario);
document.getElementById('email').addEventListener('input', validarFormulario);
document.getElementById('how').addEventListener('change', validarFormulario);
document.getElementById('consent').addEventListener('change', validarFormulario);
