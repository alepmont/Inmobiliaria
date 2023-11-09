$(document).ready(function () {
  // Obtener datos del JSON
  $.ajax({
    url: 'departamento.json', // Cambia 'datos.json' al nombre de tu archivo JSON
    dataType: 'json',
    success: function (data) {
      mostrarPropiedades(data.propiedades);

      // Filtrar propiedades al hacer clic en el botón Filtrar
      $('#filtrarBtn').on('click', function () {
        var minPrecio = $('#minPrecio').val();
        var maxPrecio = $('#maxPrecio').val();

        var propiedadesFiltradas = filtrarPorPrecio(data.propiedades, minPrecio, maxPrecio);
        mostrarPropiedades(propiedadesFiltradas);
      });
    },
    error: function () {
      alert('Error al cargar datos');
    },
  });

  // Función para mostrar propiedades en la página
  function mostrarPropiedades(propiedades) {
    $('#contenedor-inmuebles-casas').empty();

    for (var i = 0; i < propiedades.length; i++) {
      var propiedad = propiedades[i];
      var html =
        '<div class="casas1">' +
        '<a href="' +
        propiedad.url +
        '"><img class="casa-imagen" src="./Imagenes/depto' +
        (i + 1) +
        '.jpg" alt=""></a>' +
        '<div class="casa-detalles">' +
        '<a href="' +
        propiedad.url +
        '"><h3 class="casa-titulo">$' +
        propiedad.precio +
        '</h3></a>' +
        '<p>' +
        propiedad.lugar +
        ': Departamento ubicada en calle Lavalle, cuenta con ' +
        propiedad.habitaciones +
        ' habitaciones, baño completo, cocina-comedor y no dispone de cochera</p>' +
        '</div>' +
        '</div>';

      $('#contenedor-inmuebles-casas').append(html);
    }
  }

  // Función para filtrar propiedades por precio
  function filtrarPorPrecio(propiedades, minPrecio, maxPrecio) {
    return propiedades.filter(function (propiedad) {
      var precio = parseFloat(propiedad.precio);
      return precio >= minPrecio && precio <= maxPrecio;
    });
  }
});
