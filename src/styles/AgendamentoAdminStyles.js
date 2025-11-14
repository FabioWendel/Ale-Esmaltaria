import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f0f5",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#c54dbd",
  },
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: "#e5b3ff",
  },
  info: {
    fontSize: 16,
    color: "#333",
  },
  status: {
    fontWeight: "bold",
    marginTop: 5,
    color: "#c54dbd",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  aprovar: {
    backgroundColor: "#a8e6cf",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: "#006400",
    fontWeight: "bold",
  },
  recusar: {
    backgroundColor: "#ffd3b6",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: "#8b0000",
    fontWeight: "bold",
  },
  excluir: {
    backgroundColor: "#ffaaa5",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: "#8b0000",
    fontWeight: "bold",
  },
});
