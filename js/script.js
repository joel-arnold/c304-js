const titulo = document.querySelector("#titulo"); // Selecciona el <h1>
const botones = document.querySelectorAll(".h1"); // Todos los elementos con clase "btn"

console.log(titulo.textContent); // Muestra el texto del <h1> en la consola

// Selección de los nuevos elementos
const miBoton = document.getElementById("miBoton");
const textoResultado = document.getElementById("textoResultado");
const btnAlerta = document.getElementById("btnAlerta"); // Seleccionando el botón de alerta

// Agregar evento al botón
miBoton.addEventListener("click", function () {
  // Si el texto está oculto, lo mostramos, si está visible, lo ocultamos
  if (textoResultado.style.display === "none") {
    textoResultado.style.display = "block";
  } else {
    textoResultado.style.display = "none";
  }
});

// Agregar evento al botón de alerta
btnAlerta.addEventListener("click", function() {
  window.alert("¡Hola! Esta es una alerta de Window");
});

// Agregar evento a los botones
titulo.addEventListener("click", function () {  // Corregido "hove" a "hover"
  // Cambia el color del texto al azar
  const colores = ["red", "blue", "green", "yellow", "purple"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  titulo.style.color = colorAleatorio;
});
