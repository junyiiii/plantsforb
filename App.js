import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login.js';
import MyGarden from './screens/MyGarden.js';
import Donate from './screens/Donate.js'

const Stack = createStackNavigator();

// https://reactnavigation.org/docs/themes/

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='MyGarden' component={MyGarden}/>
        <Stack.Screen name='Donate' component={Donate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
