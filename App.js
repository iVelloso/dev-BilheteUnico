import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {useFonts} from 'expo-font'

export default function App() {
  
  const [fontsLoaded] = useFonts({
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
  });
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>
        Nome
      </Text>    

      <TextInput 
      style={estilos.input}/> 

      <Text style={estilos.texto}>
        E-mail
      </Text>    

      <TextInput 
      style={estilos.input}
      keyboardType="email-address"/> 

      <Text style={estilos.texto}>
        Data de nascimento
      </Text>    

      <TextInput 
      style={estilos.input}
      keyboardType="number-pad"/> 

      <Text style={estilos.texto}>
        Telefone
      </Text>    

      <TextInput 
      style={estilos.input}
      keyboardType="number-pad"/>  

      <Text style={estilos.texto}>
        Estado
      </Text>    

      <TextInput 
      style={estilos.input}/> 

      <Text style={estilos.texto}>
        Cidade
      </Text>    

      <TextInput 
      style={estilos.input}/> 

      <Text style={estilos.texto}>
        CPF
      </Text>    

      <TextInput 
      style={estilos.input}
      keyboardType="number-pad"/> 

      <Text style={estilos.texto}>
        Senha
      </Text>    

      <TextInput 
      style={estilos.input}
      secureTextEntry={true}/> 

      <Text style={estilos.texto}>
        Confirmar senha
      </Text>    

      <TextInput 
      style={estilos.input}
      secureTextEntry={true}/> 

      <TouchableOpacity 
      style={estilos.button}>
        <Text style={estilos.textButton}>
          Cadastrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8
  },
  texto:{
    color: "#020614",
    fontSize: 12,
    fontFamily: 'Poppins-Light'
  },
  input:{
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    width: '80%'
  },
  button:{
    backgroundColor: "#087C57",
    paddingHorizontal: 140,
    paddingVertical: 16,
    borderRadius: 32
  },
  textButton:{
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: 'Poppins-Light'
  }
})