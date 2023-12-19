import React, {useState} from 'react'
import { Text, View } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { useEffect } from 'react'
import cameraStyles from '../styles/cameraStyles'
import { TouchableOpacity } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

const CameraScreen = ({navigation}) => {
  let [hasPermission, setHasPermission] = useState(null)
  let [cameraType, setCameraType] = useState(CameraType.back)

  useEffect(() => {
    (async () => {
      let { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()  
  }, [])

  let navigateBack = () => {
    navigation.goBack()
  }

  let doubleTap = Gesture.Tap().numberOfTaps(2).onStart(() => {
    console.log('double tap')
    cameraType === CameraType.back ? setCameraType(CameraType.front) : setCameraType(CameraType.back)
  })
  return (
    <View style={cameraStyles.cameraScreen}>
      <View>
        <TouchableOpacity onPress={navigateBack}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
      <GestureDetector gesture={doubleTap}>
        <Camera style={cameraStyles.camera} 
                type={cameraType} />
      </GestureDetector>
      <View style={cameraStyles.cameraButtonRow}>
        <TouchableOpacity style={cameraStyles.cameraButton} />
      </View>
    </View>
  )
}

export default CameraScreen
