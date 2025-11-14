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
  button: {
    backgroundColor: "#e5b3ff",
    paddingVertical: 12,
    borderRadius: 12,
    marginVertical: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  item: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginVertical: 5,
    borderLeftWidth: 4,
    borderLeftColor: "#c54dbd",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cancel: {
    color: "#e64b3c",
    fontWeight: "bold",
  },
  status: {
    fontWeight: "bold",
    marginTop: 5,
    color: "#c54dbd",
  },
});
