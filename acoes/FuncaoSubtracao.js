import { Alert } from 'react-native';
export default function funcaoSubtracao(number1, number2) {
const subtract = parseFloat(number1) - parseFloat(number2);
if (isNaN(subtract)) {
alert('Erro', 'Por favor, insira números válidos.');
} else {
alert(`A subtração é: ${subtract}`);
}
}