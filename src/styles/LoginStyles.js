import { StyleSheet } from "react-native";

export default StyleSheet.create({
  image: {
    width: 180,
    height: 180,
    marginBottom: 10,
  },

  container: {
    flex: 1,
    backgroundColor: "#f1e4e9ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  signupButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
    backgroundColor: "transparent",
    padding: 8,
  },
  signupButtonText: {
    color: "#ba6877",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#ba6877",
  },
  description: {
    fontSize: 14,
    color: "#ba6877",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    borderColor: "#e6a191",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#ba6877",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
