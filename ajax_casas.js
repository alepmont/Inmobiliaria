$(document).ready(function() {
    $('#filtrarBtn').on('click', function() {
        const minPrecio = $('#minPrecio').val();
        const maxPrecio = $('#maxPrecio').val();

        $.ajax({
            url: 'casas.json', 
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                filtrarCasas(data, minPrecio, maxPrecio);
            },
            error: function(error) {
                console.log("Error al cargar las casas:", error);
            }
        });
    });
});

function filtrarCasas(casas, minPrecio, maxPrecio) {
    const filtrados = casas.filter(casa => {
        return casa.precio >= minPrecio && casa.precio <= maxPrecio;
    });

    mostrarCasas(filtrados);
}

function mostrarCasas(casas) {
    const contenedor = $('.banner-secciones');
    contenedor.empty();

    casas.forEach(casa => {
        const casaHTML = `
        <div class="contenedor-inmuebles-casas">
            <div class="casas1"> 
                <img class="casa-imagen" src="${casa.imagen}" alt="">
                <div class="casa-detalles">
                    <h3 class="casa-titulo">$${casa.precio}</h3>
                    <p>${casa.descripcion}</p>
                </div>
            </div>
        </div>`;
        
        contenedor.append(casaHTML);
    });
}
