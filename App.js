import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import CustomButton from './componentes/CustomButton/CustomButton';
import TextInputBox from './componentes/TextInputBox/TextInputBox';
import funcaoSoma from './acoes/FuncaoSoma';
import funcaoDivisao from './acoes/FuncaoDivisao';
import funcaoMultiplicacao from './acoes/FuncaoMultiplicacao';
import { useState } from 'react';
import funcaoSubtracao from './acoes/FuncaoSubtracao';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Soma de dois números</Text>
      <TextInputBox value={number1}
        onChangeText={setNumber1}
        placeholder="Digite o primeiro número (gitcommit test)"
        keyboardType="numeric"
      />
      <TextInputBox value={number2}
        onChangeText={setNumber2}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
      />
      <View style={styles.buttonContainer}>
      <CustomButton title="+"
        onPress={() => funcaoSoma(number1, number2)}
        style={styles.button}
      />
      <CustomButton title="/"
      onPress={() => funcaoDivisao(number1, number2)}
      style ={styles.button}
      />
       <CustomButton title="-"
      onPress={() => funcaoSubtracao(number1, number2)}
      style ={styles.button}
      />
       <CustomButton title="*"
      onPress={() => funcaoMultiplicacao(number1, number2)}
      style ={styles.button}
      />
      </View>
       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  },
  title: {
  fontSize: 24,
  marginBottom: 20,
  }
  ,
  buttonContainer: {
    flexDirection: "row",  // Alinha os botões na horizontal
    alignItems: "center",  // Centraliza na vertical (se necessário)
    marginTop: 30,  // Adiciona um espaçamento do topo
    gap: 10
  },
  
  
  });