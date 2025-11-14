import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { padding: 20, backgroundColor: "#f1e4e9ff", flex: 1 },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ba6877",
  },
  item: {
    padding: 15,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 8,
  },
  nome: { fontSize: 18, color: "#ba6877" },
  preco: { fontSize: 16, color: "#e6a191" },
  carrinho: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#ffeef0",
    borderRadius: 8,
  },
  total: { fontSize: 20, fontWeight: "bold", color: "#ba6877" },
  itens: { marginTop: 10, fontSize: 16, color: "#ba6877" },
  itemCarrinho: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  remover: { color: "red", fontSize: 14 },
  botaoFinalizar: {
    marginTop: 15,
    backgroundColor: "#e6a191",
    padding: 10,
    borderRadius: 8,
  },
  textoBotao: { color: "#fff", fontWeight: "bold", textAlign: "center" },
});
