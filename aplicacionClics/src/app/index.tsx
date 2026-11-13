import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Tipo de dato de cada fila de la tabla
type Registro = { id: string; numero: number; hora: string };

// Devuelve la hora actual en formato HH:MM:SS
function obtenerHora(): string {
  const ahora = new Date();
  const hh = String(ahora.getHours()).padStart(2, "0");
  const mm = String(ahora.getMinutes()).padStart(2, "0");
  const ss = String(ahora.getSeconds()).padStart(2, "0");
  return `${hh}:${mm}:${ss}`;
}

export default function App() {
  // Estados: React redibuja la pantalla cuando cambian
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<Registro[]>([]);

  const incrementarContador = () => {
    const nuevoNumero = contador + 1;
    setContador(nuevoNumero);
    // El registro nuevo va primero para que quede arriba
    setRegistros([
      { id: `${Date.now()}-${nuevoNumero}`, numero: nuevoNumero, hora: obtenerHora() },
      ...registros,
    ]);
  };

  // Reto 1: reiniciar a cero
  const reiniciarContador = () => {
    setContador(0);
    setRegistros([]);
  };

  return (
    <View style={estilos.body}>
      <View style={estilos.tarjeta}>
        <Text style={estilos.titulo}>Interactividad con React Native</Text>
        <Text style={estilos.subtitulo}>
          Toca el botón para incrementar el contador y registrar la hora exacta del evento.
        </Text>

        <Text style={estilos.counterBox}>{contador}</Text>

        {/* Botones disparadores de eventos */}
        <View style={estilos.botones}>
          <TouchableOpacity style={estilos.btnClick} onPress={incrementarContador}>
            <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[estilos.btnClick, estilos.btnReiniciar]}
            onPress={reiniciarContador}
          >
            <Text style={estilos.btnText}>Reiniciar</Text>
          </TouchableOpacity>
        </View>

        {/* Tabla de registros */}
        <View style={estilos.tableContainer}>
          {/* Cabecera de la tabla */}
          <View style={estilos.tableHeader}>
            <Text style={[estilos.th, estilos.cellNumero]}>Nº Clic</Text>
            <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
          </View>

          {/* Cuerpo de la tabla con scroll */}
          <ScrollView style={estilos.tableBody}>
            {registros.map((item, index) => (
              <View
                key={item.id}
                style={[estilos.tr, index % 2 === 0 ? estilos.trEven : null]}
              >
                <Text style={[estilos.td, estilos.cellNumero]}>{item.numero}</Text>
                <Text style={[estilos.td, estilos.cellHora]}>{item.hora}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#f4f7f6",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  tarjeta: {
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 420,
    padding: 24,
    borderRadius: 12,
    alignItems: "center",
    elevation: 6,
  },
  titulo: { fontSize: 22, fontWeight: "800", color: "#2c3e50", textAlign: "center" },
  subtitulo: { fontSize: 13, color: "#555", textAlign: "center", marginTop: 6 },
  counterBox: { fontSize: 56, fontWeight: "bold", color: "#3498db", marginVertical: 16 },
  botones: { flexDirection: "row", gap: 10, marginBottom: 20 },
  btnClick: {
    backgroundColor: "#2ecc71",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 4,
  },
  btnReiniciar: { backgroundColor: "#e74c3c" },
  btnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  tableContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 6,
    overflow: "hidden",
  },
  tableHeader: { flexDirection: "row", backgroundColor: "#f8f9fa" },
  th: { paddingVertical: 10, fontWeight: "bold", color: "#555", textAlign: "center" },
  tableBody: { maxHeight: 250 },
  tr: { flexDirection: "row", borderTopWidth: 1, borderTopColor: "#eee" },
  trEven: { backgroundColor: "#fafafa" },
  td: { paddingVertical: 10, textAlign: "center", color: "#333" },
  cellNumero: { flex: 1 },
  cellHora: { flex: 1 },
});