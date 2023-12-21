import { NavBar } from '../components/NavBar';
import React, {useState} from 'react'
import { Text, TouchableOpacityBase, View } from 'react-native'
import { Camera, CameraType, CameraPictureOptions } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { useEffect } from 'react'
import cameraStyles from '../styles/cameraStyles'
import { TouchableOpacity } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

const CameraScreen = ({navigation}) => {
  let [hasPermission, setHasPermission] = useState(null)
  let [cameraReady, setCameraReady] = useState(false)
  let [cameraType, setCameraType] = useState(CameraType.back)
  let [camera, setCamera] = useState(null)
  let [photo, setPhoto] = useState(null)
  useEffect(() => {
    (async () => {
      let { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()  
  }, [])

  useEffect(() => {
    if (camera === null) return
    setCameraReady(true)
  }, [camera])


  let takePicture = async () => {
    if (!hasPermission || !cameraReady || camera === null) return
    let currPhoto = await camera.takePictureAsync()
    setPhoto(currPhoto)
    navigation.navigate('CapturedPictureScreen', {'picture' : currPhoto})

  }
  let doubleTap = Gesture.Tap().numberOfTaps(2).onStart(() => {
    cameraType === CameraType.back ? setCamerawType(CameraType.front) : setCameraType(CameraType.back)
  })
  return (
    <View style={cameraStyles.cameraScreen}>
      <NavBar goBack={() => {navigation.goBack()}}  />
      <GestureDetector gesture={doubleTap}>
        <Camera style={cameraStyles.camera} 
                type={cameraType}
                ref={(ref) => {setCamera(ref)}} />
      </GestureDetector>
      <View style={cameraStyles.cameraButtonRow}>
        <TouchableOpacity 
            onPress={takePicture}
            style={cameraStyles.cameraButton} />
      </View>
    </View>
  )
}

export default CameraScreen
