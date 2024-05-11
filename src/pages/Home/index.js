import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import style from "../Home/styles";

export default function Login({ route, navigation }) {
  const { eml } = route.params;
  const image = { uri: 'assets/home.png' };

  function acessarEscolha() {
    navigation.navigate('Escolha');

}

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>BEM VINDO! {eml}</Text>
        <View style={styles.caixa1}>
          <TouchableOpacity style={styles.generateButton} onPress={acessarEscolha}>
            <Text style={styles.generateButtonText}>Gerar</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    padding: 32,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  caixa1: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
 
  },
  generateButton: {
    backgroundColor: '#FFD700', 
    padding: 10,
    borderRadius: 32,
    borderStyle: "dashed" 
  },
  generateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
