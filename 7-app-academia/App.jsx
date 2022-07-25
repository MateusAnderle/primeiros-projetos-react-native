import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/Home';
import { Exercise } from './src/screens/Exercise'

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
        <NavigationContainer >
          <StatusBar style="light" />
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Exercise" component={Exercise} />
            </Stack.Navigator>
        </NavigationContainer>
  );
}