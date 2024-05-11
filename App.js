import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/pages/Login';
import Home from './src/pages/Home'; 
import Cadastro from './src/pages/Cadastro';  
import Escolha from './src/pages/Escolha'; 

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Group screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Escolha" component={Escolha} />
      </Stack.Group>
    </Stack.Navigator>
   </NavigationContainer>
  );
}