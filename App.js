import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Login from './app/screens/Login';
import Sign_in from './app/screens/Sign_in'
import HomePage from './app/screens/HomePage'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homevisit from './app/screens/Homevisit';


const Stack = createNativeStackNavigator();

export default function App() {

 

  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Sign_in" component={Sign_in} options={{headerShown: false}}/>
      <Stack.Screen name="Homevisit" component={Homevisit} options={{headerShown: false}}/>
      <Stack.Screen name="Homepage" component={HomePage} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

