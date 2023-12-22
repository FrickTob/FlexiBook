import React from 'react'
import startScreenStyles from '../styles/startScreenStyles'
import { Button } from 'react-native'
import { Text, View } from 'react-native'
import { NavigationProp } from '@react-navigation/native'

interface StartScreenProps {
  navigation: NavigationProp<any,any>
}

const StartScreen : React.FC<StartScreenProps> = ({navigation}) => {

  let navigateToLibrary = () => {
    navigation.navigate('LibraryScreen')
  }
  return (
    <View style={startScreenStyles.startScreenBox}>
      <Text>{"FlexiBook"}</Text>
      <Button title="Start" onPress={navigateToLibrary} />
    </View>
  )
}

export default StartScreen
