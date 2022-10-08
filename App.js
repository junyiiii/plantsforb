import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login.js';
import MyGarden from './screens/MyGarden.js';

const Stack = createStackNavigator();

// https://reactnavigation.org/docs/themes/

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='MyGarden'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='MyGarden' component={MyGarden} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
