import { useFocusEffect } from "@react-navigation/native";
import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import styles from "../../styles/CadastroStyles";
import { useNavigation } from "@react-navigation/native";
import {
  loadAllServices,
  deleteService,
  clearAllServices,
} from "../../storage/AdminStorage";
import { Ionicons } from "@expo/vector-icons";

export default function ListarServicosScreen() {
  const [categorias, setCategorias] = useState([]);
  const navigation = useNavigation();

  const loadCategorias = async () => {
    try {
      const data = await loadAllServices();
      setCategorias(data);
    } catch (error) {
      Alert.alert("Erro ao carregar serviços", error.message);
    }
  };

  useEffect(() => {
    loadCategorias();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadCategorias();
    }, [])
  );

  const handleDeleteItem = async (categoria, id) => {
    try {
      await deleteService(categoria, id);
      Alert.alert("Item removido!");
      await loadCategorias();
    } catch (error) {
      Alert.alert("Erro ao excluir item", error.message);
    }
  };

  const handleClearAll = async () => {
    Alert.alert(
      "Confirmar exclusão",
      "Deseja realmente apagar todos os serviços?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Apagar",
          style: "destructive",
          onPress: async () => {
            await clearAllServices();
            setCategorias([]);
            Alert.alert("Todos os serviços foram removidos!");
          },
        },
      ]
    );
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

            <Text style={styles.title}>Serviços Cadastrados</Text>

            {categorias.length === 0 ? (
              <Text style={{ textAlign: "center", color: "#666" }}>
                Nenhum serviço cadastrado ainda.
              </Text>
            ) : (
              categorias
                .filter((cat) => cat.items && cat.items.length > 0)
                .map((cat) => (
                  <View
                    key={cat.categoria}
                    style={{
                      backgroundColor: "white",
                      padding: 15,
                      borderRadius: 15,
                      marginVertical: 8,
                      width: "100%",
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 16,
                        marginBottom: 8,
                        textTransform: "capitalize",
                      }}
                    >
                      {cat.categoria}
                    </Text>

                    {cat.items.map((item) => (
                      <View
                        key={item.id}
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 6,
                        }}
                      >
                        <Text>
                          {item.nome} - R${" "}
                          {parseFloat(item.preco).toFixed(2).replace(".", ",")}
                        </Text>
                        <View style={{ flexDirection: "row", gap: 20 }}>
                          <TouchableOpacity
                            onPress={() =>
                              navigation.navigate("Editar Serviço", {
                                categoria: cat.categoria,
                                item,
                              })
                            }
                          >
                            <Ionicons
                              name="create-outline"
                              size={22}
                              color="#4a90e2"
                            />
                          </TouchableOpacity>

                          <TouchableOpacity
                            onPress={() =>
                              handleDeleteItem(cat.categoria, item.id)
                            }
                          >
                            <Ionicons
                              name="trash-outline"
                              size={22}
                              color="#e64b3c"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    ))}
                  </View>
                ))
            )}

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Administrativo")}
            >
              <Text style={styles.buttonText}>Novo Serviço</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, { marginTop: 10 }]}
              onPress={handleClearAll}
            >
              <Text style={styles.buttonText}>Apagar Tudo</Text>
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
