import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './screens/Home.js';
import Donate from './screens/Donate.js'
import Wallet from './screens/Wallet.js'
import Store from './screens/Store.js'
import Garden from './screens/Garden.js'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator 
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#613eea',
      }}>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Wallet" 
        component={Wallet} 
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color={color} size={size} />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Garden" 
        component={Garden} 
        options={{
          tabBarLabel: 'Garden',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="flower" color={color} size={size} />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Store" 
        component={Store} 
        options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          )
        }}
      ></Tab.Screen>
      <Tab.Screen 
        name="Donate" 
        component={Donate} 
        options={{
          tabBarLabel: 'Donate',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          )
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
