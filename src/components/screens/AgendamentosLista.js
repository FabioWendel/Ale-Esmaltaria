import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../styles/AgendamentoStyles";
import { Ionicons } from "@expo/vector-icons";

export default function AgendamentosLista() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      try {
        const data = await AsyncStorage.getItem("@agendamentos");
        if (data) setAgendamentos(JSON.parse(data));
      } catch (error) {
        console.log("Erro ao carregar agendamentos:", error);
      }
    };
    carregar();
  }, []);

  const excluir = async (id) => {
    const filtrados = agendamentos.filter((a) => a.id !== id);
    setAgendamentos(filtrados);
    await AsyncStorage.setItem("@agendamentos", JSON.stringify(filtrados));
    Alert.alert("Agendamento excluído!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Agendamentos</Text>

      {agendamentos.length === 0 ? (
        <Text style={{ textAlign: "center", color: "#999" }}>
          Nenhum agendamento ainda.
        </Text>
      ) : (
        <FlatList
          data={agendamentos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View>
                <Text style={{ fontWeight: "bold", color: "#c54dbd" }}>
                  {/* Se tiver vários serviços, junta todos com vírgula */}
                  {Array.isArray(item.servicos)
                    ? item.servicos.join(", ")
                    : item.servico || "Serviço não informado"}
                </Text>

                <Text>
                  {item.data} às {item.hora}
                </Text>

                <Text>
                  <Text style={{ fontWeight: "bold" }}>Cliente:</Text>{" "}
                  {item.cliente || "Não informado"}
                </Text>

                {item.total && (
                  <Text>
                    <Text style={{ fontWeight: "bold" }}>Total:</Text> R${" "}
                    {item.total.toFixed(2)}
                  </Text>
                )}

                <Text
                  style={[
                    styles.status,
                    {
                      color:
                        item.status === "Aprovado"
                          ? "green"
                          : item.status === "Recusado"
                          ? "red"
                          : "#c54dbd",
                    },
                  ]}
                >
                  Status: {item.status}
                </Text>
              </View>

              <TouchableOpacity onPress={() => excluir(item.id)}>
                <Ionicons name="trash-outline" size={22} color="#e64b3c" />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}
