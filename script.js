// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const cuerpoTabla = document.getElementById("tabla-registros");

// 2. Variable de estado (debe ser let, no const, porque cambia)
let likes = 0;

// 3. Escuchar el evento click y actualizar el DOM
boton.addEventListener("click", () => {
  likes++;
  textoContador.textContent = likes;
});