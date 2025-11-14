import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/LoginStyles";
import { getUserByCpf } from "../../storage/UserStorage";

export default function AlehLogin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!id || !password) {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const user = await getUserByCpf(id);

      if (user && user.senha === password) {
        await AsyncStorage.setItem(
          "@usuario_logado",
          JSON.stringify({
            nome: user.nome,
            cpf: user.cpf,
          })
        );

        navigation.replace("Home");
      } else {
        Alert.alert("CPF ou senha incorretos.");
      }
    } catch (error) {
      Alert.alert("Erro ao realizar login", error.message);
    }
  };

  const handleSignUp = () => {
    navigation.navigate("Cadastro");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
            <Text style={styles.signupButtonText}>Criar Conta</Text>
          </TouchableOpacity>

          <Image
            source={require("../../../assets/logo3.png")}
            style={styles.image}
            resizeMode="contain"
          />

          <Text style={styles.loginText}>Login</Text>
          <Text style={styles.description}>Faça seu login.</Text>

          <TextInput
            style={styles.input}
            placeholder="CPF"
            value={id}
            onChangeText={setId}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
