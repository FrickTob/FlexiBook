import React from 'react'
import { Image, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NavBar from '../components/NavBar'
import { NavigationProp, RouteProp } from '@react-navigation/native'

interface CapturedPictureScreenProps {
  route: RouteProp<any,any>
  navigation: NavigationProp<any,any>
}

const CapturedPictureScreen : React.FC<CapturedPictureScreenProps> = ({route, navigation}) => {
  return (
    <View style={{position : 'relative', flex : 1}}>
        <NavBar goBack={() => {navigation.goBack()}} />
        <Image style={{flex : 1}} source={route.params?.picture} />
    </View>
  )
}

export default CapturedPictureScreen
