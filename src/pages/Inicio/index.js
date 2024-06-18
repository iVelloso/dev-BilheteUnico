import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inicio() {
  const image1 = { uri: 'assets/bilheteinicio.png' };
  const image2 = { uri: 'assets/unicoinicio.png' };
  const image3 = { uri: 'assets/trevo.png' };
  const eclipse1 = { uri: 'assets/eclipse1.png' };
  const eclipse2 = { uri: 'assets/eclipse2.png' };
  const eclipse3 = { uri: 'assets/eclipse3.png' };
  const eclipse4 = { uri: 'assets/eclipse4.png' };

  const navigation = useNavigation();
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Login')}>
      <Image source={image1} style={styles.image1} />
      <Image source={image2} style={styles.image2} />
      <Image source={image3} style={styles.image3} />
      <Image source={eclipse1} style={styles.eclipse1} />
      <Image source={eclipse2} style={styles.eclipse2} />
      <Image source={eclipse3} style={styles.eclipse3} />
      <Image source={eclipse4} style={styles.eclipse4} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#087C57',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image1: {
    width: 300, 
    height: 200, 
    resizeMode: 'contain',
    marginBottom: 50,
    marginTop: -200,
    zIndex: 3,
  },
  image2: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
    marginBottom: 50,
    marginTop: -170,
    zIndex: 3,
  },
  image3: {
    width: 400, 
    height: 400, 
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 2,
    right: -35,
    zIndex: 3,
  },
  eclipse1: {
    width: 430, 
    height: 430, 
    resizeMode: 'contain',
    position: 'absolute',
    top: -100,
    left: -150,
    zIndex: 1, 
  },
  eclipse2: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    position: 'absolute',
    top: -20,
    right: -30,
    zIndex: 1, // este comando ajuda no empilhamento dos elementos
  },
  eclipse3: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    left: -20,
    zIndex: 1,
  },
  eclipse4: {
    width: 400, 
    height: 400, 
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 50, 
    right: -120, 
    zIndex: 1, 
  },
  
});
