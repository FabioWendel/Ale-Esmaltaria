import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveService = async (categoria, nome, preco) => {
  try {
    const precoFormatado = parseFloat(preco.replace(",", ".")).toFixed(2);

    const key = `@app:${categoria.toLowerCase()}`;
    const stored = await AsyncStorage.getItem(key);
    const items = stored ? JSON.parse(stored) : [];

    const newItem = {
      id: (items.length + 1).toString(),
      nome,
      preco: parseFloat(precoFormatado),
    };

    items.push(newItem);
    await AsyncStorage.setItem(key, JSON.stringify(items));
    return true;
  } catch (error) {
    console.error("Erro ao salvar serviço:", error);
    return false;
  }
};

export const loadAllServices = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const servicosKeys = keys.filter(
      (k) => k.startsWith("@app:") && k !== "@app:users"
    );

    const data = [];
    for (const key of servicosKeys) {
      const nomeCategoria = key.replace("@app:", "");
      const items = JSON.parse((await AsyncStorage.getItem(key)) || "[]");
      data.push({ categoria: nomeCategoria, items });
    }
    return data;
  } catch (error) {
    console.error("Erro ao carregar serviços:", error);
    return [];
  }
};

export const deleteService = async (categoria, id) => {
  try {
    const key = `@app:${categoria}`;
    const stored = await AsyncStorage.getItem(key);
    const items = stored ? JSON.parse(stored) : [];
    const updated = items.filter((i) => i.id !== id);
    await AsyncStorage.setItem(key, JSON.stringify(updated));
  } catch (error) {
    console.error("Erro ao excluir serviço:", error);
  }
};

export const clearAllServices = async () => {
  const keys = await AsyncStorage.getAllKeys();
  const servicosKeys = keys.filter((k) => k.startsWith("@app:"));
  await AsyncStorage.multiRemove(servicosKeys);
};

export const updateService = async (categoria, id, nome, preco) => {
  try {
    const precoFormatado = parseFloat(preco.replace(",", ".")).toFixed(2);

    const key = `@app:${categoria}`;
    const stored = await AsyncStorage.getItem(key);
    const items = stored ? JSON.parse(stored) : [];

    const updatedItems = items.map((i) =>
      i.id === id ? { ...i, nome, preco: parseFloat(precoFormatado) } : i
    );

    await AsyncStorage.setItem(key, JSON.stringify(updatedItems));
    return true;
  } catch (error) {
    console.error("Erro ao atualizar serviço:", error);
    return false;
  }
};

export const loadServicesByCategory = async (categoria) => {
  try {
    const key = `@app:${categoria.toLowerCase()}`;
    const stored = await AsyncStorage.getItem(key);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error("Erro ao carregar serviços da categoria", e);
    return [];
  }
};
