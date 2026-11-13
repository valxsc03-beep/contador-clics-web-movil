// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const boton = document.getElementById("btn-like");
const cuerpoTabla = document.getElementById("tabla-registros");

// 2. Variable de estado (let porque cambia)
let likes = 0;

// 3. Devuelve la hora actual en formato HH:MM:SS
function obtenerHora() {
  const ahora = new Date();
  const hh = String(ahora.getHours()).padStart(2, "0");
  const mm = String(ahora.getMinutes()).padStart(2, "0");
  const ss = String(ahora.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

// 4. Crea una fila <tr> con dos <td> y la pone al inicio del <tbody>
function agregarRegistro(numero) {
  const fila = document.createElement("tr");

  const celdaNumero = document.createElement("td");
  celdaNumero.textContent = numero;

  const celdaHora = document.createElement("td");
  celdaHora.textContent = obtenerHora();

  fila.appendChild(celdaNumero);
  fila.appendChild(celdaHora);
  cuerpoTabla.prepend(fila); // el más reciente queda arriba
}

// 5. Escuchar el clic: contar, actualizar el DOM y registrar en la tabla
boton.addEventListener("click", () => {
  likes++;
  textoContador.textContent = likes;
  agregarRegistro(likes);
});

const botonReiniciar = document.getElementById("btn-reiniciar");

botonReiniciar.addEventListener("click", () => {
  likes = 0;
  textoContador.textContent = likes;
  cuerpoTabla.innerHTML = ""; // vacía la tabla
});