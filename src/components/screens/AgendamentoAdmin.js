import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from "../../styles/AgendamentoAdminStyles";

export default function AgendamentoAdmin() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      const data = await AsyncStorage.getItem("@agendamentos");
      if (data) setAgendamentos(JSON.parse(data));
    };
    carregar();
  }, []);

  const salvar = async (dados) => {
    await AsyncStorage.setItem("@agendamentos", JSON.stringify(dados));
  };

  const atualizarStatus = async (id, novoStatus) => {
    const atualizados = agendamentos.map((a) =>
      a.id === id ? { ...a, status: novoStatus } : a
    );
    setAgendamentos(atualizados);
    await salvar(atualizados);
  };

  const excluir = async (id) => {
    const filtrados = agendamentos.filter((a) => a.id !== id);
    setAgendamentos(filtrados);
    await salvar(filtrados);
    Alert.alert("Agendamento excluído!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Painel de Agendamentos</Text>

      {agendamentos.length === 0 ? (
        <Text style={{ textAlign: "center", color: "#999", marginTop: 20 }}>
          Nenhum agendamento no momento.
        </Text>
      ) : (
        <FlatList
          data={agendamentos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <View style={{ flex: 1 }}>
                <Text style={styles.info}>
                  <Text style={{ fontWeight: "bold" }}>Cliente:</Text>{" "}
                  {item.cliente}
                </Text>
                <Text style={styles.info}>
                  <Text style={{ fontWeight: "bold" }}>Data:</Text> {item.data}{" "}
                  às {item.hora}
                </Text>
                <Text style={styles.info}>
                  <Text style={{ fontWeight: "bold" }}>Serviços:</Text>{" "}
                  {item.servicos?.join(", ")}
                </Text>
                <Text style={styles.info}>
                  <Text style={{ fontWeight: "bold" }}>Total:</Text> R${" "}
                  {item.total?.toFixed(2)}
                </Text>
              </View>

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
                {item.status}
              </Text>

              <View style={styles.actions}>
                <TouchableOpacity
                  onPress={() => atualizarStatus(item.id, "Aprovado")}
                >
                  <Text style={styles.aprovar}>Aceitar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => atualizarStatus(item.id, "Recusado")}
                >
                  <Text style={styles.recusar}>Recusar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => excluir(item.id)}>
                  <Text style={styles.excluir}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}
