import React, { useState } from "react";
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
import DropDownPicker from "react-native-dropdown-picker";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/CadastroStyles";
import { saveService } from "../../storage/AdminStorage";

export default function AdminScreen() {
  const [categoria, setCategoria] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const navigation = useNavigation();

  const handleAddService = async () => {
    if (!categoria || !nome || !preco) {
      Alert.alert("Por favor, preencha todos os campos!");
      return;
    }

    const success = await saveService(categoria, nome, preco);
    if (success) {
      Alert.alert("Serviço cadastrado com sucesso!");
      setCategoria("");
      setNome("");
      setPreco("");
      navigation.navigate("Lista de Serviços");
    } else {
      Alert.alert("Erro ao salvar o serviço.");
    }
  };

  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Nails Alongamento", value: "nails alongamento" },
    { label: "Nails Manutenção", value: "nails manutenção" },
    { label: "Manicure e Pedicure", value: "manicure e pedicure" },
    { label: "Nails Designer", value: "nails designer" },
    { label: "Sobrancelha", value: "sobrancelha" },
    { label: "Make", value: "make" },
    { label: "Cílios", value: "cílios" },
    { label: "Massagens", value: "massagens" },
    { label: "Depilação", value: "depilação" },
  ]);

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
            <Text style={styles.title}>Cadastrar Serviço</Text>
            <Text style={styles.subtitle}>Adicione um novo serviço</Text>
            <DropDownPicker
              open={open}
              value={categoria}
              items={items}
              setOpen={setOpen}
              setValue={setCategoria}
              setItems={setItems}
              listMode="SCROLLVIEW"
              placeholder="Selecione a categoria"
              style={{
                borderColor: "#e6a191",
                backgroundColor: "white",
                marginBottom: 15,
              }}
              dropDownContainerStyle={{
                borderColor: "#e6a191",
              }}
              placeholderStyle={{
                color: "#c4c0c0ff",
              }}
              arrowIconStyle={{
                tintColor: "#ba6877",
              }}
            />
            <TextInput
              style={styles.input}
              placeholder="Nome do serviço"
              value={nome}
              onChangeText={setNome}
            />
            <TextInput
              style={styles.input}
              placeholder="Preço (ex: 100.00)"
              value={preco}
              onChangeText={setPreco}
              keyboardType="numeric"
            />
            <TouchableOpacity style={styles.button} onPress={handleAddService}>
              <Text style={styles.buttonText}>Salvar Serviço</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { marginTop: 10 }]}
              onPress={() => navigation.navigate("Lista de Serviços")}
            >
              <Text style={styles.buttonText}>Ver Serviços</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { marginTop: 10 }]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
