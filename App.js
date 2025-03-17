import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculoScreen from './screens/calculo/CalculoScreen';
import HomeScreen from './screens/home/HomeScreen';
import IMC from './screens/calculoIMC/IMC'
import CalculoScreenIMC from './screens/calculoIMC/IMC'
const Tab = createBottomTabNavigator();export default function App() {
return (
<NavigationContainer>
<Tab.Navigator>
<Tab.Screen name="Home" component={HomeScreen} />
<Tab.Screen name="Calculadora" component={CalculoScreen} />
<Tab.Screen name="IMC" component={IMC} />
</Tab.Navigator>
</NavigationContainer>
);
}