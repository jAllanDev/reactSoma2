import { Alert } from 'react-native';
export default function funcaoSoma(number1, number2) {
const sum = parseFloat(number1) + parseFloat(number2);
if (isNaN(sum)) {
alert('Erro', 'Por favor, insira números válidos.');
} else {
alert(`A soma é: ${sum}`);
}
}