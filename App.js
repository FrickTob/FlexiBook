import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Image} from 'react-native';
import generalStyles from './styles/generalstyles';
import navigationBarStyles from './styles/navigationBarStyles';
import { useState } from 'react';
import StartScreen from './screens/StartScreen';
import LibraryScreen from './screens/LibraryScreen';
import CameraScreen from './screens/CameraScreen';

export default function App() {

  let Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
