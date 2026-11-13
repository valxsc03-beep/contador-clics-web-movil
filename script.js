// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const botonReiniciar = document.getElementById("btn-reiniciar");
const cuerpoTabla = document.getElementById("tabla-registros");
const tarjeta = document.querySelector(".tarjeta");

// 2. Variable de estado
let likes = 0;

// 3. Hora actual en formato HH:MM:SS
function obtenerHora() {
  const ahora = new Date();
  const hh = String(ahora.getHours()).padStart(2, "0");
  const mm = String(ahora.getMinutes()).padStart(2, "0");
  const ss = String(ahora.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

// 4. Agregar una fila al inicio de la tabla
function agregarRegistro(numero) {
  const fila = document.createElement("tr");
  const celdaNumero = document.createElement("td");
  celdaNumero.textContent = numero;
  const celdaHora = document.createElement("td");
  celdaHora.textContent = obtenerHora();
  fila.appendChild(celdaNumero);
  fila.appendChild(celdaHora);
  cuerpoTabla.prepend(fila);
}

// 5. Reto 2: cambiar color si supera 10
function verificarMeta() {
  const superaDiez = likes > 10;
  textoContador.classList.toggle("meta", superaDiez);
  tarjeta.classList.toggle("meta", superaDiez);
}

// 6. Botón de like
boton.addEventListener("click", () => {
  likes++;
  textoContador.textContent = likes;
  agregarRegistro(likes);
  verificarMeta();
});

// 7. Reto 1: botón reiniciar
botonReiniciar.addEventListener("click", () => {
  likes = 0;
  textoContador.textContent = likes;
  cuerpoTabla.innerHTML = "";
  verificarMeta();
});