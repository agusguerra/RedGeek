document.getElementById('form-card').addEventListener('submit', function(event) {
    var campos = ['service', 'first-name', 'last-name', 'email', 'how']; // Agrega aquí los ids de todos los campos que quieras validar
    for (var i = 0; i < campos.length; i++) {
        var campo = document.getElementById(campos[i]);
        if (campo.value === '') {
            event.preventDefault();
            campo.style.borderColor = 'red';
            var error = document.getElementById('error-' + campos[i]);
            if (error) {
                error.style.display = 'block';
            }
            // Ajusta el desplazamiento aquí
            campo.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    }
    var consent = document.getElementById('consent');
    if (!consent.checked) {
        event.preventDefault();
        consent.style.outline = '1px solid red';
        var error = document.getElementById('error-consent');
        if (error) {
            error.style.display = 'block';
        }
        // Ajusta el desplazamiento aquí
        document.getElementById('form-card').scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
});

