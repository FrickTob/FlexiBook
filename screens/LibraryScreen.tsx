import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import libraryPageStyles from '../styles/libraryPageStyles'
import BookGrid from '../components/BookGrid'
import Book from '../data/Book'
import { NavigationProp } from '@react-navigation/native'

interface LibraryScreenProps {
  navigation: NavigationProp<any,any>
}

const LibraryScreen : React.FC<LibraryScreenProps> = ({navigation}) => {
  let navigateToCamera = () => {
    navigation.navigate('CameraScreen')
  }

  let libraryList = []
  libraryList.push(new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", new Date(1997, 6, 26)))
  libraryList.push(new Book("Maze Runner", "James Dashner", new Date(2009, 10, 6)))
  libraryList.push(new Book("The Hunger Games", "Suzanne Collins", new Date(2008, 9, 14)))
  return (
    <View style={libraryPageStyles.libraryScreen}>
      <Text>My Library</Text>
      <BookGrid bookList={libraryList}/>
      <TouchableOpacity style={libraryPageStyles.addBookButton} onPress={navigateToCamera}>
        <View><Text>+</Text></View>
        </TouchableOpacity>
    </View>
  )
}

export default LibraryScreen
