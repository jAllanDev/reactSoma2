import { Alert } from 'react-native';
export default function funcaoMultiplicacao(number1, number2) {
const multiply = parseFloat(number1) * parseFloat(number2);
if (isNaN(multiply)) {
alert('Erro', 'Por favor, insira números válidos.');
} else {
alert(`A multiplicação é: ${multiply}`);
}
}

