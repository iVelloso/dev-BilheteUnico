import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home({ route, navigation }) {
  const image = { uri: 'assets/home.png' };

  function acessarEscolha() {
    navigation.navigate('Escolha');
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Bem Vindo!</Text>
        <Text style={styles.t2}>Fulano de tal</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle1}>Meu número da sorte</Text>
          <TouchableOpacity style={styles.buttonSmall} onPress={acessarEscolha}>
            <Text style={styles.buttonTextSmall}>Ver</Text>
          </TouchableOpacity>

          <View style={styles.button}>
            <TouchableOpacity style={styles.buttonNumber} onPress={acessarEscolha}>
              <Text style={styles.buttonTextNumber}>XX</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle2}>Sortear meus números</Text>
          <TouchableOpacity style={styles.buttonLarge}>
            <Text style={styles.buttonTextLarge}>GERAR</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.footerIcon}>🏠</Text>
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Historico')}>
          <Text style={styles.footerIcon}>📜</Text>
          <Text style={styles.footerButtonText}>Histórico</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Perfil')}>
          <Text style={styles.footerIcon}>👤</Text>
          <Text style={styles.footerButtonText}>Perfil</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 25,
    marginBottom: 20,
    color: '#ffff',
    marginLeft: 30,
    marginTop: -150,
  },
  t2: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffff',
    marginLeft: 30,
  },
  name: {
    fontSize: 18,
    marginBottom: 20,
  },
  card: {
    width: '80%',
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    margin: 40,
    marginRight: 20,
  },
  cardTitle1: {
    fontSize: 14,
    marginBottom: 20,
    marginLeft: 10,
  },
  cardTitle2: {
    fontSize: 14,
    marginBottom: 20,
    marginLeft: 10,
  },
  buttonSmall: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#dcdcdc',
    padding: 5,
    borderRadius: 50,
    width: '20%',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonTextSmall: {
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },
  buttonNumber: {
    marginTop: 20,
    backgroundColor: '#087C57',
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    width: 40,
    marginLeft: 100,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonTextNumber: {
    fontSize: 15,
    color: '#FFD700',
  },
  buttonLarge: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 32,
    width: '40%',
    alignItems: 'center',
    marginLeft: 75,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonTextLarge: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#dcdcdc',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerIcon: {
    fontSize: 24,
  },
  footerButtonText: {
    fontSize: 16,
    color: '#000',
  },
});
