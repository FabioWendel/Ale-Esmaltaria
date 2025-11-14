import AsyncStorage from "@react-native-async-storage/async-storage";

const USER_KEY = "@app:users";

export const loadUsers = async () => {
  try {
    const users = await AsyncStorage.getItem(USER_KEY);
    return users ? JSON.parse(users) : [];
  } catch (e) {
    console.error("Erro ao carregar usuários", e);
    return [];
  }
};

export const postUser = async (newUser) => {
  try {
    const storedUsers = await AsyncStorage.getItem(USER_KEY);
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    users.push(newUser);

    await AsyncStorage.setItem(USER_KEY, JSON.stringify(users));
    return true;
  } catch (e) {
    console.error("Erro ao salvar usuário", e);
    return false;
  }
};

export const getUserByCpf = async (cpf) => {
  try {
    const users = await loadUsers();
    return users.find((u) => u.cpf === cpf) || null;
  } catch (e) {
    console.error("Erro ao buscar usuário por CPF", e);
    return null;
  }
};
