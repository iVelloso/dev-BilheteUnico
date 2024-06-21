import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Escolha({ navigation }) {
  const [number, setNumber] = useState('');
  const image = { uri: 'assets/home.png' };

  const acessarHome = () => {
    navigation.navigate('Home');
  };

  const handleKeyPress = (digit) => {
    setNumber((prev) => prev + digit);
  };

  const handleBackspace = () => {
    setNumber((prev) => prev.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.numberBox}>
          <Text style={styles.numberBoxText}>{number || 'XX'}</Text>
        </View>

        <View style={styles.keyboard}>
          {Array.from({ length: 3 }, (_, rowIndex) => (
            <View style={styles.keyboardRow} key={rowIndex}>
              {Array.from({ length: 3 }, (_, colIndex) => {
                const digit = rowIndex * 3 + colIndex + 1;
                return (
                  <TouchableOpacity 
                    style={styles.keyButton} 
                    key={digit} 
                    onPress={() => handleKeyPress(digit.toString())}
                  >
                    <Text style={styles.keyButtonText}>{digit}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
          <View style={styles.keyboardRow}>
            <View style={styles.keyButtonPlaceholder} />
            <TouchableOpacity style={styles.keyButton} onPress={() => handleKeyPress('0')}>
              <Text style={styles.keyButtonText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.keyButton} onPress={handleBackspace}>
              <Text style={styles.keyButtonText}>⌫</Text>
            </TouchableOpacity>
          </View>
        </View>

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
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    paddingBottom: 50, 
  },
  numberBox: {
    backgroundColor: '#FFD700',
    padding: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 10,
    
  },
  numberBoxText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#087C57',
  },
  keyboard: {
    marginBottom: 20, 
  },
  keyboardRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10, 
  },
  keyButton: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5, 
    width: 50, 
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  keyButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  keyButtonPlaceholder: {
    width: 50,
    marginHorizontal: 5, 
  },
  generateButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 32,
    borderStyle: 'dashed',
    marginTop: 20,
  },
  generateButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
