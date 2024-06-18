import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Inicio() {
  const image1 = { uri: 'assets/bilheteinicio.png' };
  const image2 = { uri: 'assets/unicoinicio.png' };
  const image3 = { uri: 'assets/trevo.png' };
  
  return (
    <View style={styles.container}>
      <Image source={image1} style={styles.image1} />
      <Image source={image2} style={styles.image2} />
      <Image source={image3} style={styles.image3} />
    </View>
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
 },
  image2: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain',
    marginBottom: 50,
    marginTop: -170,
  },
  image3: {
    width: 350, 
    height: 350, 
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 50,
    right: -25,
  },
});