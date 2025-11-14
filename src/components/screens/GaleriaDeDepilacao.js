import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const tipos = [
  { nome: "Arqueada", imagem: require("../../../assets/arqueada.png") },
  { nome: "Reta", imagem: require("../../../assets/reta.png") },
  { nome: "Angulada", imagem: require("../../../assets/angulada.png") },
  { nome: "Curvada", imagem: require("../../../assets/curvada.png") },
  { nome: "Fina", imagem: require("../../../assets/fina.png") },
  { nome: "Grossa", imagem: require("../../../assets/grossa.png") },
];

export default function GaleriaDeDepilacao() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Designer Feito em Clientes</Text>
      {tipos.map((tipo, index) => (
        <View key={index} style={styles.card}>
          <Image source={tipo.imagem} style={styles.imagem} />
          <Text style={styles.nome}>{tipo.nome}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f3d3d7",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ba6877",
    marginBottom: 20,
  },
  card: {
    alignItems: "center",
    marginBottom: 30,
  },
  imagem: {
    width: 200,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    color: "#211f20",
  },
});
