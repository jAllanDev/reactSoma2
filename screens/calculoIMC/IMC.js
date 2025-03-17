import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import CustomButton from '../../componentes/CustomButton/CustomButton';
import TextInputBox from '../../componentes/TextInputBox/TextInputBox';
import { Picker } from '@react-native-picker/picker';
import MathUtils from '../../acoes/MathUtils';
import funcaoIMC from '../../acoes/FuncaoIMC';
export default function CalculoScreen() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [selectedValue, setSelectedValue] = useState('Somar');

    return (

        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Cálculo IMC</Text>
            <TextInputBox
                value={number1}
                onChangeText={setNumber1}
                placeholder="Digite o peso"
                keyboardType="numeric"
            />
            <TextInputBox
                value={number2}
                onChangeText={setNumber2}
                placeholder="Digite a altura"
                keyboardType="numeric"
            />
            <CustomButton
                title="Calcular IMC"
                onPress={() =>
                    funcaoIMC(number1, number2)}
                style={styles.button}
            />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: 200,
    }
});
