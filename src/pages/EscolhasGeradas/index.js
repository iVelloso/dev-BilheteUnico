import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function EscolhasGeradas() {
  const backgroundImage = { uri: 'assets/home.png' };
  const trevoImage = { uri: 'assets/trevo.png' };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.imageBackground}>
        <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.title}>Seus números são:</Text>
          <View style={styles.boxContainer}>
            {[...Array(6).keys()].map((index) => (
              <View key={index} style={styles.box}>
                <Text style={styles.boxText}>XX</Text>
              </View>
            ))}
          </View>
        </TouchableOpacity>
      </ImageBackground>

      {/* Imagem do trevo sobreposta */}
      <Image source={trevoImage} style={styles.imageTrevo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  box: {
    width: 50,
    height: 80,
    backgroundColor: '#FFD700',
    marginHorizontal: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 25,
    color: '#087C57',
    fontWeight: 'bold',
    marginTop: -10,
  },
  imageTrevo: {
    width: 150, 
    height: 150, 
    position: 'absolute',
    top: 50, 
    right: 20,
  },
});
