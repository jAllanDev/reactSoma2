import { Alert } from 'react-native';
class MathUtils{
static funcaoCalculo(number1, number2, acao) {
var calc;
switch (acao) {
case '+':
calc = parseFloat(number1) + parseFloat(number2);
break;
case '-':
calc = parseFloat(number1) - parseFloat(number2);
break;
case '*':
calc = parseFloat(number1) * parseFloat(number2);
break;
case '/':
calc = parseFloat(number1) / parseFloat(number2);
break;
default:
break;
}
{
    alert(`Resultado é: ${calc}`);
}
}
}



export default MathUtils;