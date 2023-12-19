import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import libraryPageStyles from '../styles/libraryPageStyles'

const LibraryScreen = ({navigation}) => {
  let navigateToCamera = () => {
    navigation.navigate('CameraScreen')
  }
  return (
    <View style={libraryPageStyles.libraryScreen}>
      <Text>My Library</Text>
      <TouchableOpacity style={libraryPageStyles.addBookButton}  title="CameraButton" onPress={navigateToCamera}>
        <View><Text>+</Text></View>
        </TouchableOpacity>
    </View>
  )
}

export default LibraryScreen
