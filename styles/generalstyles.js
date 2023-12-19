import { StyleSheet } from 'react-native';

const generalStyles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      backgroundColor: '#fff',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    statusBar: {
        backgroundColor: 'slategray',
    },
  });

  export default generalStyles;

