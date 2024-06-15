import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Escolha({ navigation }) {
  const image = { uri: 'assets/home.png' };

  const acessarHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Escolha seu Número da Sorte</Text>
        <TouchableOpacity style={[styles.generateButton, { justifyContent: 'center' }]} onPress={acessarHome}>
          <Text style={[styles.generateButtonText, { textAlign: 'center' }]}>Confirmar</Text>
        </TouchableOpacity>
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
    alignItems: 'center', 
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30, 
  },
  generateButton: {
    backgroundColor: '#FFD700',
    padding: 15, 
    borderRadius: 32,
    borderStyle: "dashed",
  },
  generateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
