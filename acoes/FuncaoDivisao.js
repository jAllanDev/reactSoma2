import { Alert } from 'react-native';
export default function funcaoDivisao(number1, number2) {
const divide = parseFloat(number1) / parseFloat(number2);
if (isNaN(divide)) {
alert('Erro', 'Por favor, insira números válidos.');
} else {
alert(`A divisão é: ${divide}`);
}
}