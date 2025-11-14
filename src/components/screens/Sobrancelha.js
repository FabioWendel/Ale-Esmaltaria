import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/sobrancelha2.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Sobrancelha</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Designer de Sobrancelhas")}
      >
        <Text style={styles.buttonText}>Designer de Sobrancelhas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tipos de Design")}
      >
        <Text style={styles.buttonText}>Tipos de Design</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Nossas Clientes")}
      >
        <Text style={styles.buttonText}>Nossas Clientes</Text>
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
    width: 220,
    height: 160,
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
