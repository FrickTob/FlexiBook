import { StyleSheet } from 'react-native';

const libraryPageStyles = StyleSheet.create({
    libraryScreen: {
        position: 'relative',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    },
    book: {
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    libraryGrid: {
        paddingTop: 10,
        display: 'grid',
        gridTemplateColumns: '1fr',
        width: '100%',
    },
    addBookButton: {
        position: 'absolute',
        bottom: 0,
        aspectRatio: 1,
        width: '20%',
        borderRadius: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    }
  });

  export default libraryPageStyles;

