import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRoute, useNavigation } from "@react-navigation/native";
import styles from "../../styles/AgendamentoStyles";

export default function AgendamentoCliente() {
  const route = useRoute();
  const navigation = useNavigation();
  const { nomeCliente, total, itens } = route.params || {};

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const carregar = async () => {
      const data = await AsyncStorage.getItem("@agendamentos");
      if (data) setAppointments(JSON.parse(data));
    };
    carregar();
  }, []);

  const salvar = async (dados) => {
    await AsyncStorage.setItem("@agendamentos", JSON.stringify(dados));
  };

  const handleAgendar = async () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert("Selecione uma data e horário!");
      return;
    }

    const agora = new Date();
    const dataSelecionada = new Date(
      `${selectedDate}T${selectedTime.toISOString().split("T")[1]}`
    );

    if (dataSelecionada < agora) {
      Alert.alert(
        "Data inválida",
        "Não é possível agendar em uma data passada."
      );
      return;
    }

    // conflito de horários (intervalo de 1h)
    const conflito = appointments.some((a) => {
      if (a.data !== selectedDate) return false;
      const [h, m] = a.hora.split(":").map(Number);
      const horaMarcada = new Date(
        `${a.data}T${h.toString().padStart(2, "0")}:${m
          .toString()
          .padStart(2, "0")}:00`
      );
      const diff = Math.abs(dataSelecionada - horaMarcada) / (1000 * 60 * 60);
      return diff < 1;
    });

    if (conflito) {
      Alert.alert(
        "Horário ocupado",
        "Já existe um agendamento nesse horário (ou muito próximo)."
      );
      return;
    }

    const novo = {
      id: Date.now(),
      cliente: nomeCliente || "Cliente não informado",
      servicos: itens || [],
      total: total || 0,
      data: selectedDate,
      hora: selectedTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      status: "Pendente",
    };

    const atualizados = [...appointments, novo];
    setAppointments(atualizados);
    await salvar(atualizados);

    Alert.alert("Agendamento realizado com sucesso!");
    navigation.navigate("Agendamentos Lista");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agende seu horário</Text>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ color: "#c54dbd", textAlign: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Cliente:</Text>{" "}
          {nomeCliente || "Não informado"}
        </Text>
        <Text style={{ color: "#c54dbd", textAlign: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Total:</Text> R${" "}
          {total?.toFixed(2) || "0,00"}
        </Text>
        {itens && itens.length > 0 && (
          <Text style={{ color: "#c54dbd", textAlign: "center" }}>
            <Text style={{ fontWeight: "bold" }}>Serviços:</Text>{" "}
            {itens.join(", ")}
          </Text>
        )}
      </View>

      <Calendar
        minDate={new Date().toISOString().split("T")[0]}
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: "#e5b3ff",
          },
        }}
      />

      <TouchableOpacity
        onPress={() => setShowTimePicker(true)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>
          {selectedTime
            ? selectedTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })
            : "Escolher horário"}
        </Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          mode="time"
          value={selectedTime || new Date()}
          onChange={(event, time) => {
            setShowTimePicker(false);
            if (time) setSelectedTime(time);
          }}
        />
      )}

      <TouchableOpacity
        onPress={handleAgendar}
        style={[styles.button, { backgroundColor: "#c54dbd" }]}
      >
        <Text style={styles.buttonText}>Confirmar Agendamento</Text>
      </TouchableOpacity>
    </View>
  );
}
