import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import libraryPageStyles from '../styles/libraryPageStyles'
import BookGrid from '../components/BookGrid'
import Book from '../data/book'

const LibraryScreen = ({navigation}) => {
  let navigateToCamera = () => {
    navigation.navigate('CameraScreen')
  }

  let libraryList = []
  libraryList.push(new Book("1",2,3))
  return (
    <View style={libraryPageStyles.libraryScreen}>
      <Text>My Library</Text>
      <BookGrid bookList={libraryList}/>
      <TouchableOpacity style={libraryPageStyles.addBookButton}  title="CameraButton" onPress={navigateToCamera}>
        <View><Text>+</Text></View>
        </TouchableOpacity>
    </View>
  )
}

export default LibraryScreen
