$(document).ready(function() {
    $('#filtrarBtn').on('click', function() {
        const minPrecio = $('#minPrecio').val();
        const maxPrecio = $('#maxPrecio').val();

        $.ajax({
            url: 'hotel.json',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                filtrarHotel(data, minPrecio, maxPrecio);
            },
            error: function(error) {
                console.log("Error al cargar los hoteles:", error);
            }
        });
    });
});

function filtrarHotel(hoteles, minPrecio, maxPrecio) {
    const filtrados = hoteles.filter(hotel => {
        return hotel.precio >= minPrecio && hotel.precio <= maxPrecio;
    });

    mostrarHotel(filtrados);
}

function mostrarHotel(hoteles) {
    const contenedor = $('.banner-secciones');
    contenedor.empty();

    hoteles.forEach(hotel => {
        const hotelHTML = `
        <div class="contenedor-inmuebles-hotel">
            <div class="hotel">
                <img class="hotel-imagen" src="${hotel.imagen}" alt="">
                <div class="hotel-detalles">
                    <h3 class="hotel-titulo">$${hotel.precio}</h3>
                    <p>${hotel.descripcion}</p>
                </div>
            </div>
        </div>`;

        contenedor.append(hotelHTML);
    });
}
