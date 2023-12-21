import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './screens/StartScreen';
import LibraryScreen from './screens/LibraryScreen';
import CameraScreen from './screens/CameraScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import CapturedPictureScreen from './screens/CapturedPictureScreen';

export default function App() {

  let Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={Platform.OS === 'ios' ? {flex: 1, paddingTop : '15%'} : {flex : 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Start' screenOptions={{headerShown : false}}>
          <Stack.Screen name="Start" component={StartScreen} />
          <Stack.Screen name="LibraryScreen" component={LibraryScreen} />
          <Stack.Screen name="CameraScreen" component={CameraScreen} />
          <Stack.Screen name="CapturedPictureScreen" component={CapturedPictureScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
