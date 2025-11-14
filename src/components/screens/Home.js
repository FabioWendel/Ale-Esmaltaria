import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import styles from "../../styles/HomeStyles";

const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={[styles.container, { width }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.row}>
          <ServiceButton
            label="Nails"
            icon={require("../../../assets/nails.png")}
            onPress={() => navigation.navigate("Nails")}
          />
          <ServiceButton
            label="Sobrancelha"
            icon={require("../../../assets/sobrancelha.png")}
            onPress={() => navigation.navigate("Sobrancelha")}
          />
          <ServiceButton
            label="Make"
            icon={require("../../../assets/make.png")}
            onPress={() => navigation.navigate("Make")}
          />
        </View>

        <Image
          source={require("../../../assets/logo4.png")}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.row}>
          <ServiceButton
            label="Massagens"
            icon={require("../../../assets/massagens.png")}
            onPress={() => navigation.navigate("Massagens")}
          />
          <ServiceButton
            label="Depilação"
            icon={require("../../../assets/depilacao.png")}
            onPress={() => navigation.navigate("Depilação")}
          />
          <ServiceButton
            label="Agenda"
            icon={require("../../../assets/agenda.png")}
            onPress={() => navigation.navigate("Agendamentos Lista")}
          />
        </View>

        <ServiceButton
          label="Sobre Nós"
          icon={require("../../../assets/sobre-nos.png")}
          onPress={() => navigation.navigate("SobreNos")}
        />

        <TouchableOpacity
          style={[styles.logoutButton, { marginTop: 30 }]}
          onPress={() => navigation.navigate("AlehLogin")}
        >
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

        <View style={{ height: 80 }} />
      </ScrollView>

      <ScrollView
        contentContainerStyle={[
          styles.container,
          { width, justifyContent: "flex-start", height },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#ba6877",
            marginTop: 20,
            marginBottom: 35,
            textAlign: "center",
          }}
        >
          Área Administrativa
        </Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 15,
          }}
        >
          <ServiceButton
            label="Agendamentos"
            icon={require("../../../assets/agendamento.png")}
            onPress={() => navigation.navigate("Agendamento Adm")}
          />
          <ServiceButton
            label="Listar Serviços"
            icon={require("../../../assets/lista.png")}
            onPress={() => navigation.navigate("Lista de Serviços")}
          />
          <ServiceButton
            label="Novo Serviço"
            icon={require("../../../assets/cad.png")}
            onPress={() => navigation.navigate("Administrativo")}
          />
        </View>

        <Text
          style={{
            textAlign: "center",
            marginTop: 40,
            color: "#999",
            fontStyle: "italic",
          }}
        >
          ← Arraste para voltar à Home
        </Text>
      </ScrollView>
    </ScrollView>
  );
}

function ServiceButton({ label, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.service} onPress={onPress}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}
