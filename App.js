import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, ImageBackground } from 'react-native';
import CustomButton from './componentes/CustomButton/CustomButton';
import TextInputBox from './componentes/TextInputBox/TextInputBox';
import funcaoSoma from './acoes/FuncaoSoma';
import funcaoDivisao from './acoes/FuncaoDivisao';
import funcaoMultiplicacao from './acoes/FuncaoMultiplicacao';
import { useState } from 'react';
import funcaoSubtracao from './acoes/FuncaoSubtracao';
import Logo from './componentes/Logo/Logo';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import MathUtils from './acoes/MathUtils';

function CalculoScreen() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [selectedValue, setSelectedValue] = useState("+"); 

  return (


    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={styles.container}>

      <Logo />

      <Text style={styles.title}>Calculadora</Text>
      <TextInputBox value={number1}
        onChangeText={setNumber1}
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
      />

      <Picker
      selectedValue={selectedValue}
      style={styles.picker}
      onValueChange={(itemValue, itemIndex) =>
      setSelectedValue(itemValue)}
      >
      <Picker.Item label="Somar" value="+" />
      <Picker.Item label="Subtrair" value="-" />
      <Picker.Item label="Multiplicar" value="*" />
      <Picker.Item label="Dividir" value="/" />
      </Picker>

      <TextInputBox value={number2}
        onChangeText={setNumber2}
        placeholder="Digite o segundo número"
        keyboardType="numeric"
      />

     

      <View style={styles.buttonContainer}>

      <CustomButton title="Realizar cálculo"
        onPress={() => 
        MathUtils.funcaoCalculo(number1, number2, selectedValue)}
        style={styles.button}
      />
      
      
      </View>
      
      </ScrollView>
      
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'white',
  alignItems: 'center',
  justifyContent: 'center',
  },
  title: {
  fontSize: 36,
  marginBottom: 30,
  }
  
  ,
  buttonContainer: {
    flexDirection: "row",  // Alinha os botões na horizontal
    alignItems: "center",  // Centraliza na vertical (se necessário)
    marginTop: 30,  // Adiciona um espaçamento do topo
    gap: 10
  },
  picker:{
    height: 20,
    width: 100,
  }
  
  
  });

  export default CalculoScreen;