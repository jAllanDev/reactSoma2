import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import CustomButton from './componentes/CustomButton/CustomButton';
import TextInputBox from './componentes/TextInputBox/TextInputBox';
import funcaoSoma from './acoes/FuncaoSoma';
import { useState } from 'react';


export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.title}>Soma de dois números</Text>
      <TextInputBox value={number1}
        onChangeText={setNumber1}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
      />
      <TextInputBox value={number2}
        onChangeText={setNumber2}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
      />
      <CustomButton title="Somar"
        onPress={() => funcaoSoma(number1, number2)}
        style={styles.button}
      />

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
  });