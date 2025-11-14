import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/CadastroStyles";
import { postUser } from "../../storage/UserStorage";

export default function CadastroScreen() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  const handleSignUp = async () => {
    if (nome && cpf && endereco && telefone && senha) {
      const success = await postUser({ nome, cpf, endereco, telefone, senha });
      if (success) {
        Alert.alert("Cadastro realizado com sucesso!");
        navigation.navigate("AlehLogin");
      } else {
        Alert.alert("Erro ao salvar o cadastro");
      }
    } else {
      Alert.alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <Image
              source={require("../../../assets/logo3.png")}
              style={styles.logo}
              resizeMode="contain"
            />

            <Text style={styles.title}>Crie sua conta</Text>

            <TouchableOpacity onPress={() => navigation.navigate("AlehLogin")}>
              <Text style={styles.subtitle}>
                Já tem uma conta? <Text style={styles.link}>Clique aqui.</Text>
              </Text>
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={nome}
              onChangeText={setNome}
            />
            <TextInput
              style={styles.input}
              placeholder="CPF"
              value={cpf}
              onChangeText={setCpf}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Endereço"
              value={endereco}
              onChangeText={setEndereco}
            />
            <TextInput
              style={styles.input}
              placeholder="Telefone"
              value={telefone}
              onChangeText={setTelefone}
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              placeholder="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />

            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
