import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { loadServicesByCategory } from "../../storage/AdminStorage";
import styles from "../../styles/AlongamentoStyles";

export default function Alongamento() {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);
  const [servicos, setServicos] = useState([]);
  const [nomeCliente, setNomeCliente] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const userData = await AsyncStorage.getItem("@usuario_logado");
        if (userData) {
          const usuario = JSON.parse(userData);
          setNomeCliente(usuario.nome);
        }
      } catch (error) {
        console.log("Erro ao carregar usuário logado:", error);
      }
    };
    fetchUsuario();
  }, []);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const data = await loadServicesByCategory("nails alongamento");
        setServicos(data);
      } catch (error) {
        Alert.alert("Erro ao carregar serviços", error.message);
      }
    };
    fetchServicos();
  }, []);

  const adicionarAoCarrinho = (servico) => {
    setCarrinho([...carrinho, servico]);
    setTotal(total + servico.preco);
  };

  const removerDoCarrinho = (index) => {
    const itemRemovido = carrinho[index];
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    setCarrinho(novoCarrinho);
    setTotal(total - itemRemovido.preco);
  };

  const finalizarPedido = async () => {
    if (carrinho.length === 0) {
      Alert.alert("Carrinho vazio", "Selecione pelo menos um serviço.");
      return;
    }

    try {
      const pedidoId = Date.now().toString();

      navigation.navigate("Agendamento", {
        pedidoId,
        nomeCliente: nomeCliente || "Cliente não identificado",
        total,
        itens: carrinho.map((i) => i.nome),
      });

      setCarrinho([]);
      setTotal(0);
    } catch (error) {
      Alert.alert("Erro ao salvar", error.message);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => adicionarAoCarrinho(item)}
    >
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>R$ {item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Serviços de Alongamento</Text>

      <FlatList
        data={servicos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <View style={styles.carrinho}>
        <Text style={styles.total}>Total: R$ {total}</Text>
        <Text style={styles.itens}>Itens selecionados:</Text>

        {carrinho.map((item, index) => (
          <View key={index} style={styles.itemCarrinho}>
            <Text>• {item.nome}</Text>
            <TouchableOpacity onPress={() => removerDoCarrinho(index)}>
              <Text style={styles.remover}>Remover</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity
          style={styles.botaoFinalizar}
          onPress={finalizarPedido}
        >
          <Text style={styles.textoBotao}>Finalizar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
