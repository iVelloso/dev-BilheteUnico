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
        <View style={styles.bottomSpace}>
          <Text style={styles.text}>BEM VINDO!</Text>
          <Text style={styles.welcomeName}>Fulano de tal</Text>
          <View style={styles.caixa1}>
            <TouchableOpacity style={styles.generateButton} onPress={acessarEscolha}>
              <Text style={styles.generateButtonText}>Gerar</Text>
            </TouchableOpacity>
          </View>
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
    flex: 10,
    justifyContent: 'flex-end',
  },
  bottomSpace: {
    flex: 1,
    padding: 32,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 10, 
  },
  welcomeName: {
    color: 'white', 
    fontSize: 14, 
    fontWeight: 'normal', 
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
    borderStyle: "dashed",
    paddingHorizontal: 55,
  },
  generateButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
