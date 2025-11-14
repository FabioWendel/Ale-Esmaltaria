import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from "react-native";

export default function SobreNos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Sobre Nós</Text>

      <Text style={styles.texto}>
        Bem-vindo ao nosso espaço de beleza! Somos apaixonadas por cuidar de
        você com carinho, profissionalismo e estilo. Oferecemos serviços
        personalizados de estética, maquiagem, sobrancelha, depilação e muito
        mais.
      </Text>

      <Image
        source={require("../../../assets/salao.png")}
        style={styles.imagem}
      />

      <Text style={styles.subtitulo}>Nossa Equipe</Text>

      <View style={styles.card}>
        <Image
          source={require("../../../assets/alessandra.png")}
          style={styles.foto}
        />
        <Text style={styles.nome}>Alessandra Miranda</Text>
        <Text style={styles.funcao}>Designer de Sobrancelhas</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../../../assets/joana.png")}
          style={styles.foto}
        />
        <Text style={styles.nome}>Joana Lima</Text>
        <Text style={styles.funcao}>Maquiadora Profissional</Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require("../../../assets/ana.png")}
          style={styles.foto}
        />
        <Text style={styles.nome}>Ana Souza</Text>
        <Text style={styles.funcao}>Esteticista e Massoterapeuta</Text>
      </View>

      <Text style={styles.subtitulo}>Depoimentos</Text>

      <View style={styles.depoimento}>
        <Text style={styles.citacao}>
          “Atendimento impecável e ambiente acolhedor. Me senti uma princesa!”
        </Text>
        <Text style={styles.autor}>– Camila F.</Text>
      </View>

      <View style={styles.depoimento}>
        <Text style={styles.citacao}>
          “A maquiagem ficou perfeita! Recomendo demais.”
        </Text>
        <Text style={styles.autor}>– Bruna S.</Text>
      </View>

      <View style={styles.depoimento}>
        <Text style={styles.citacao}>
          “Equipe maravilhosa, super atenciosa. Saí me sentindo renovada!”
        </Text>
        <Text style={styles.autor}>– Larissa M.</Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => Linking.openURL("https://www.instagram.com/seusalon")}
      >
        <Text style={styles.botaoTexto}>Seguir no Instagram</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff0f5", alignItems: "center" },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ba6877",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ba6877",
    marginTop: 30,
    marginBottom: 10,
  },
  texto: { fontSize: 16, textAlign: "center", marginBottom: 20, color: "#333" },
  imagem: { width: "100%", height: 180, resizeMode: "cover", borderRadius: 10 },
  card: { alignItems: "center", marginBottom: 25 },
  foto: { width: 100, height: 100, borderRadius: 50, marginBottom: 8 },
  nome: { fontSize: 18, fontWeight: "bold", color: "#ba6877" },
  funcao: { fontSize: 14, color: "#555" },
  depoimento: { marginBottom: 20, paddingHorizontal: 10 },
  citacao: {
    fontStyle: "italic",
    fontSize: 16,
    textAlign: "center",
    color: "#444",
  },
  autor: { textAlign: "center", fontSize: 14, color: "#777", marginTop: 5 },
  botao: {
    backgroundColor: "#ba6877",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginTop: 30,
  },
  botaoTexto: { color: "white", fontSize: 16, fontWeight: "bold" },
});
