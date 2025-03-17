import { Alert } from 'react-native';
export default function funcaoSubtracao(peso, altura) {
const imc = parseFloat(peso) / (parseFloat(altura) * 
parseFloat(altura));
if (isNaN(imc)) {
alert('Erro', 'Por favor, insira números válidos.');
} else {
alert(`O IMC é: ${imc}`);
}
}