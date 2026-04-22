import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card() {
  return (
    <View style={styles.cardContainer}>
      {/* tua foto do cartao pow */}
      <Image 
        source={require('./assets/Eu.jpg')} // Insira o link da foto aqui
        style={styles.ProfileImage} 
      />
      
      {/* nome completo porfavor */}
      <Text style={styles.name}>Gabriel Martauro</Text>
      
      {/* Descricaozinha né */}
      <Text style={styles.description}>Estudante de Desenvolvimento de Software</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5, // Para dar um efeito de sombra no Android
    shadowColor: '#000', // Sombras no iOS
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  ProfileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
  },
});