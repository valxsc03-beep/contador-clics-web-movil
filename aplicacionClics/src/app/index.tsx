import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  // Estado del contador (en móvil no hay DOM)
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <View style={estilos.body}>
      <View style={estilos.tarjeta}>
        <Text style={estilos.titulo}>Interactividad con React Native</Text>
        <Text style={estilos.subtitulo}>
          Toca el botón para incrementar el contador.
        </Text>

        <Text style={estilos.counterBox}>{contador}</Text>

        {/* Botón disparador de eventos */}
        <TouchableOpacity style={estilos.btnClick} onPress={incrementarContador}>
          <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
        </TouchableOpacity>
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
  btnClick: {
    backgroundColor: "#2ecc71",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 4,
  },
  btnText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
});