
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    cameraScreen: {
        position: 'relative',
        height: '100%',
    },
    cameraBox: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    camera: {
        flex: 1,
        height: '100%',
        width: '100%',
    },
    cameraButtonRow: {
        position: 'absolute',
        width: '100%',
        bottom: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10%',
    },
    cameraButton: {
        backgroundColor: 'lightblue',
        height: '100%',
        borderRadius: 1/1,
        aspectRatio: 1,
    },
    cameraTouchable: {
        height: '100%',
    },
    picture: {
        height: 200,
        width: 200,
        backgroundColor: 'lightblue',
    }
});

export default styles;