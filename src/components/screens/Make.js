import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/make2.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Make</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tipos de Maquiagem")}
      >
        <Text style={styles.buttonText}>Tipos de Maquiagem</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cilios")}
      >
        <Text style={styles.buttonText}>Cilios</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Galeria de Makes")}
      >
        <Text style={styles.buttonText}>Galeria de Makes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1e4e9ff",
    flex: 1,
    alignItems: "center",
    padding: 30,
  },
  image: {
    width: 200,
    height: 180,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ba6877",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#e6a191",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
