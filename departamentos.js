// Datos de los departamentos
var departamentos = [
    {
      imagen: "./Imagenes/depto1.jpg",
      enlace: "index_departamento_1.html",
      precio: "$18.000",
      ubicacion: "Godoy Cruz - Mendoza",
      detalles: "Departamento ubicado en calle Lavalle, cuenta con 1 habitación, baño completo, cocina-comedor y no dispone de cochera."
    },
    {
      imagen: "./Imagenes/depto2.jpg",
      enlace: "index_departamento_2.html",
      precio: "$98.000",
      ubicacion: "Capital - Mendoza",
      detalles: "Departamento ubicado en calle Necochea, cuenta con 3 habitaciones, 2 baños completos, cocina-comedor y cochera."
    },
    {
      imagen: "./Imagenes/depto3.jpg",
      enlace: "index_departamento_3.html",
      precio: "$83.000",
      ubicacion: "Las Heras - Mendoza",
      detalles: "Departamento ubicado en calle Peru, cuenta con 2 habitaciones, 1 baño completo, cocina-comedor y cochera."
    }
  ];
  
  // Función para mostrar la información de los departamentos
  function mostrarInformacionDepartamentos() {
    var contenedor = document.querySelector('.banner-secciones');
    
    for (var i = 0; i < departamentos.length; i++) {
      var departamento = departamentos[i];
      
      var divContenedor = document.createElement('div');
      divContenedor.className = 'contenedor-inmuebles-casas';
  
      var divCasas = document.createElement('div');
      divCasas.className = 'casas1';
  
      var enlaceImagen = document.createElement('a');
      enlaceImagen.href = departamento.enlace;
  
      var imagen = document.createElement('img');
      imagen.className = 'casa-imagen';
      imagen.src = departamento.imagen;
      imagen.alt = '';
  
      enlaceImagen.appendChild(imagen);
  
      var divDetalles = document.createElement('div');
      divDetalles.className = 'casa-detalles';
  
      var enlaceTitulo = document.createElement('a');
      enlaceTitulo.href = departamento.enlace;
  
      var titulo = document.createElement('h3');
      titulo.className = 'casa-titulo';
      titulo.textContent = departamento.precio;
  
      enlaceTitulo.appendChild(titulo);
  
      var parrafo = document.createElement('p');
      parrafo.textContent = departamento.ubicacion + ': ' + departamento.detalles;
  
      divDetalles.appendChild(enlaceTitulo);
      divDetalles.appendChild(parrafo);
  
      divCasas.appendChild(enlaceImagen);
      divCasas.appendChild(divDetalles);
  
      divContenedor.appendChild(divCasas);
  
      contenedor.appendChild(divContenedor);
    }
  }
  
  // Supongamos que este es tu archivo de JavaScript (por ejemplo, filtrado.js)

document.addEventListener("DOMContentLoaded", function () {
    // Obtén referencia al botón de filtrado por su id
    var filtrarBtn = document.getElementById("filtrarBtn");

    // Agrega un evento click al botón
    filtrarBtn.addEventListener("click", function () {
        // Aquí puedes agregar la lógica de filtrado o cualquier otra acción que desees realizar al hacer clic en el botón
        var minPrecio = document.getElementById("minPrecio").value;
        var maxPrecio = document.getElementById("maxPrecio").value;

        // Ejemplo de cómo imprimir los valores de los campos de precio
        console.log("Precio Mínimo: " + minPrecio);
        console.log("Precio Máximo: " + maxPrecio);

        // Aquí puedes agregar la lógica de filtrado o cualquier otra acción que desees realizar
    });
});

  
// Función para filtrar departamentos por precio
function filtrarPorPrecio(minPrecio, maxPrecio) {
    var departamentosFiltrados = departamentos.filter(function (depto) {
      var precio = parseFloat(depto.precio.replace('$', '').replace(',', ''));
      return precio >= minPrecio && precio <= maxPrecio;
    });
  
    // Luego puedes llamar a mostrarInformacionDepartamentos(departamentosFiltrados);
    // para mostrar los departamentos filtrados en la página.
  }
  
  // Función que se ejecuta cuando el DOM ha cargado
  document.addEventListener("DOMContentLoaded", function () {
    var filtrarBtn = document.getElementById("filtrarBtn");
  
    filtrarBtn.addEventListener("click", function () {
      var minPrecio = parseFloat(document.getElementById("minPrecio").value) || 0;
      var maxPrecio = parseFloat(document.getElementById("maxPrecio").value) || Infinity;
  
      filtrarPorPrecio(minPrecio, maxPrecio);
    });
  });
  
  // Llamar a la función para mostrar la información
  mostrarInformacionDepartamentos();