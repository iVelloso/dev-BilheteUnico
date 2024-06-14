import { ImageBackground, StyleSheet, Text, TouchableOpacity, View} from "react-native";
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
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.title}>fulano de tal</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Meu número da sorte</Text>
        <TouchableOpacity style={styles.buttonSmall}>
          <Text style={styles.buttonTextSmall}>Ver</Text>
        </TouchableOpacity>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>XX</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Sortear meus números</Text>
        <TouchableOpacity style={styles.buttonLarge}>
          <Text style={styles.buttonTextLarge}>GERAR</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
   
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    marginBottom: 20,
  },
  card: {
    width: '90%',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonSmall: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#dcdcdc',
    padding: 5,
    borderRadius: 5,
  },
  buttonTextSmall: {
    fontSize: 12,
    color: '#000',
  },
  numberContainer: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
  },
  numberText: {
    fontSize: 24,
    color: '#fff',
  },
  buttonLarge: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 10,
  },
  buttonTextLarge: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  }
});
