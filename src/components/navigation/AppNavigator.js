import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AlehLogin from "../screens/AlehLogin";
import Cadastro from "../screens/Cadastro";
import HomeScreen from "../screens/Home";
import Nails from "../screens/Nails";
import Sobrancelha from "../screens/Sobrancelha";
import Make from "../screens/Make";
import Massagens from "../screens/Massagens";
import SobreNos from "../screens/SobreNos";
import Depilação from "../screens/Depilação";
import Alongamento from "../screens/Alongamento";
import Manutenção from "../screens/Manutenção";
import ManicurePedicure from "../screens/ManicurePedicure";
import NailDesigner from "../screens/NailDesigner";
import DesignerDeSobrancelhas from "../screens/DesignerDeSobrancelhas";
import TiposDeDesign from "../screens/TiposDeDesign";
import NossasClientes from "../screens/NossasClientes";
import GaleriaDeMakes from "../screens/GaleriaDeMakes";
import Cilios from "../screens/Cilios";
import TiposDeMaquiagem from "../screens/TiposDeMaquiagem";
import TiposDeMassagem from "../screens/TiposDeMassagem";
import TiposDeDepilacao from "../screens/TiposDeDepilacao";
import GaleriaDeDepilacao from "../screens/GaleriaDeDepilacao";
import AdminScreen from "../screens/AdminScreen";
import ListarServicosScreen from "../screens/ListarServicosScreen";
import EditarServicoScreen from "../screens/EditarServicoScreen";
import AgendamentoCliente from "../screens/AgendamentoCliente";
import AgendamentoAdmin from "../screens/AgendamentoAdmin";
import AgendamentosLista from "../screens/AgendamentosLista";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AlehLogin">
        <Stack.Screen
          name="AlehLogin"
          component={AlehLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Nails" component={Nails} />
        <Stack.Screen name="Sobrancelha" component={Sobrancelha} />
        <Stack.Screen name="Make" component={Make} />
        <Stack.Screen name="Massagens" component={Massagens} />
        <Stack.Screen name="SobreNos" component={SobreNos} />
        <Stack.Screen name="Depilação" component={Depilação} />
        <Stack.Screen name="Alongamento" component={Alongamento} />
        <Stack.Screen name="Manutenção" component={Manutenção} />
        <Stack.Screen name="ManicurePedicure" component={ManicurePedicure} />
        <Stack.Screen name="NailDesigner" component={NailDesigner} />
        <Stack.Screen name="Agendamento" component={AgendamentoCliente} />
        <Stack.Screen name="Agendamento Adm" component={AgendamentoAdmin} />
        <Stack.Screen name="Agendamentos Lista" component={AgendamentosLista} />
        <Stack.Screen
          name="Designer de Sobrancelhas"
          component={DesignerDeSobrancelhas}
        />
        <Stack.Screen name="Tipos de Design" component={TiposDeDesign} />
        <Stack.Screen name="Nossas Clientes" component={NossasClientes} />
        <Stack.Screen name="Galeria de Makes" component={GaleriaDeMakes} />
        <Stack.Screen name="Cilios" component={Cilios} />
        <Stack.Screen name="Tipos de Maquiagem" component={TiposDeMaquiagem} />
        <Stack.Screen name="Tipos de Massagens" component={TiposDeMassagem} />
        <Stack.Screen name="Tipos de Depilação" component={TiposDeDepilacao} />
        <Stack.Screen
          name="Galeria de Depilação"
          component={GaleriaDeDepilacao}
        />
        <Stack.Screen name="Administrativo" component={AdminScreen} />
        <Stack.Screen
          name="Lista de Serviços"
          component={ListarServicosScreen}
        />
        <Stack.Screen name="Editar Serviço" component={EditarServicoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
