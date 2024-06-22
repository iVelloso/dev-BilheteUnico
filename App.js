import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import Home from './src/pages/Home'; 
import Cadastro from './src/pages/Cadastro';  
import Escolha from './src/pages/Escolha'; 
import Inicio from './src/pages/Inicio'; 
import EscolhasGeradas from './src/pages/EscolhasGeradas'; 
import React from 'react';


const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Inicio">
      <Stack.Group screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Escolha" component={Escolha} />
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="EscolhasGeradas" component={EscolhasGeradas} />
     
      </Stack.Group>
    </Stack.Navigator>
   </NavigationContainer>
  
  );
}