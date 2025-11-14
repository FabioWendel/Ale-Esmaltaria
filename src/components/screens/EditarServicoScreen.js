import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Image,
} from "react-native";
import styles from "../../styles/CadastroStyles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { updateService } from "../../storage/AdminStorage";

export default function EditarServicoScreen() {
  const route = useRoute();
  const navigation = useNavigation();
  const { categoria, item } = route.params;

  const [nome, setNome] = useState(item.nome);
  const [preco, setPreco] = useState(item.preco.toString());

  useEffect(() => {
    navigation.setOptions({ title: "Editar Serviço" });
  }, []);

  const handleUpdate = async () => {
    if (!nome || !preco) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    const success = await updateService(categoria, item.id, nome, preco);
    if (success) {
      Alert.alert("Serviço atualizado com sucesso!");
      navigation.goBack();
    } else {
      Alert.alert("Erro ao atualizar serviço!");
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
            <Text style={styles.title}>Editar Serviço</Text>

            <Text style={styles.subtitle}>
              Categoria: {categoria.toUpperCase()}
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nome do serviço"
              value={nome}
              onChangeText={setNome}
            />

            <TextInput
              style={styles.input}
              placeholder="Preço"
              value={preco}
              onChangeText={setPreco}
              keyboardType="numeric"
            />

            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Salvar Alterações</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { marginTop: 10 }]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
