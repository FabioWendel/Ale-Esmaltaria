import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/nails2.png")}
        style={styles.image}
      />
      <Text style={styles.title}>NAILS</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Alongamento")}
      >
        <Text style={styles.buttonText}>Alongamento</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Manutenção")}
      >
        <Text style={styles.buttonText}>Manutenção</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ManicurePedicure")}
      >
        <Text style={styles.buttonText}>Manicure e Pedicure</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("NailDesigner")}
      >
        <Text style={styles.buttonText}>Nail Designer</Text>
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
    width: 180,
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
