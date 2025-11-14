import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { loadServicesByCategory } from "../../storage/AdminStorage";
import styles from "../../styles/TipoMassagemStyles";

export default function TiposDeMassagem() {
  const [servicos, setServicos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);
  const [nomeCliente, setNomeCliente] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const carregarUsuario = async () => {
      try {
        const data = await AsyncStorage.getItem("@usuario_logado");
        if (data) {
          const user = JSON.parse(data);
          setNomeCliente(user.nome);
        }
      } catch (error) {
        console.log("Erro ao carregar usuário logado:", error);
      }
    };
    carregarUsuario();
  }, []);

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const data = await loadServicesByCategory("massagens");
        setServicos(data);
      } catch (error) {
        Alert.alert("Erro ao carregar serviços", error.message);
      }
    };
    fetchServicos();
  }, []);

  const adicionarAoCarrinho = (servico) => {
    setCarrinho([...carrinho, servico]);
    setTotal((prev) => prev + parseFloat(servico.preco));
  };

  const removerDoCarrinho = (index) => {
    const itemRemovido = carrinho[index];
    const novoCarrinho = carrinho.filter((_, i) => i !== index);
    setCarrinho(novoCarrinho);
    setTotal((prev) => prev - parseFloat(itemRemovido.preco));
  };

  const finalizarPedido = () => {
    if (carrinho.length === 0) {
      Alert.alert("Carrinho vazio", "Selecione pelo menos um serviço.");
      return;
    }

    const pedidoId = Date.now().toString();

    navigation.navigate("Agendamento", {
      pedidoId,
      nomeCliente: nomeCliente || "Cliente não identificado",
      total,
      itens: carrinho.map((i) => i.nome),
    });

    setCarrinho([]);
    setTotal(0);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => adicionarAoCarrinho(item)}
    >
      <Text style={styles.nome}>{item.nome}</Text>
      <Text style={styles.preco}>
        R$ {parseFloat(item.preco).toFixed(2).replace(".", ",")}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Serviços de Massagem</Text>

      {servicos.length === 0 ? (
        <Text style={{ textAlign: "center", color: "#666" }}>
          Nenhum serviço cadastrado.
        </Text>
      ) : (
        <FlatList
          data={servicos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}

      <View style={styles.carrinho}>
        <Text style={styles.total}>
          Total: R$ {total.toFixed(2).replace(".", ",")}
        </Text>

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
