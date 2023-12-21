import React from 'react'
import { View, Text } from 'react-native'

const BookGrid = ({bookList}) => {
  return (
    <View>
        {bookList.map((book) => (
        <Text>{book.title}</Text>))}
    </View>
  )
}

export default BookGrid
