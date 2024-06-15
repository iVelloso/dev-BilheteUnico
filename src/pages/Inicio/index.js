import { ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";


export default function Inicio({ route, navigation }) {
  const image = { uri: 'assets/home.png' };

  function acessarLogin() {
    navigation.navigate('Login');

}

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Bem Vindo!</Text>
      </View>

      

        

    
   
  );
}


const styles = StyleSheet.create({
 container:{
    backgroundColor: '#087C57',
    

 },
});