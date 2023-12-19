import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';
import LibraryScreen from './screens/LibraryScreen';
import CameraScreen from './screens/CameraScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  let Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{flex: 1, paddingTop : '15%'}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Start' screenOptions={{headerShown : false}}>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
