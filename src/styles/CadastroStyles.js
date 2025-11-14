import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 30,
    left: 10,
    zIndex: 2,
    padding: 8,
    backgroundColor: "transparent",
  },
  backButtonText: {
    color: "#d63384",
    fontSize: 16,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: "#f1e4e9ff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100%",
  },
  logo: {
    width: 160,
    height: 160,
    marginBottom: 10,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ba6877",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 25,
    textAlign: "center",
  },
  link: {
    color: "#ba6877",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: "#e6a191",
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    borderColor: "#ba6877",
    borderWidth: 2,
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#ba6877",
    fontSize: 18,
    fontWeight: "bold",
  },
});
