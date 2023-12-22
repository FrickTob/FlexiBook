import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Book from '../data/Book'

interface BookGridProps {
  bookList: Array<Book>
}
const BookGrid : React.FC<BookGridProps> = ({bookList}) => {
  return (
    <FlatList 
    style={{width: '100%'}}
    data={bookList}
    renderItem={({item}) => <BookItem item={item} />}
    keyExtractor={item => item.key}
    numColumns={2}>
    </FlatList>
  )
}

interface BookItemProps {
  item: Book
}
const BookItem : React.FC<BookItemProps> = ({item}) => {
  return (
    <View style={{width: '50%',
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center'}}>
      <Text>{item.title}</Text>
      <Text>{item.author}</Text>
      <Text>{item.releaseDate.toISOString()}</Text>
    </View>
  )
}

export default BookGrid
