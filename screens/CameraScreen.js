import React, {useState} from 'react'
import { Text, View } from 'react-native'
import { Camera, CameraType } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import { useEffect } from 'react'
import cameraStyles from '../styles/cameraStyles'
import { TouchableOpacity } from 'react-native-web'

const CameraScreen = ({navigation}) => {
  let [hasPermission, setHasPermission] = useState(null)

  useEffect(() => {
    (async () => {
      let { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    })()  
  }, [])

  let navigateBack = () => {
    navigation.goBack()
  }


  let cameraType = CameraType.back
  return (
    <View style={cameraStyles.cameraScreen}>
      <View>
        <TouchableOpacity onPresss={navigateBack}>
          <Text>{"<-Back"}</Text>
        </TouchableOpacity>
      </View>
      <View style={cameraStyles.cameraBox}>
        <Camera style={cameraStyles.camera} 
                type={cameraType} />
      </View>
      <View style={cameraStyles.cameraButtonRow}>
        <TouchableOpacity style={cameraStyles.cameraButton} />
      </View>
    </View>
  )
}

export default CameraScreen
