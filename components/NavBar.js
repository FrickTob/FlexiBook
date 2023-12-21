import React from "react";
import Icon  from "react-native-vector-icons/Ionicons";
import cameraStyles from '../styles/cameraStyles'
import { TouchableOpacity, Text, View } from "react-native";
export function NavBar({goBack}) {
  return (
        <TouchableOpacity style={{position: "absolute", 
                                  width: '100%', 
                                  height: '15%', 
                                  zIndex: 2, 
                                  display: 'flex',
                                  alignItems: 'start',
                                  justifyContent: 'center'}} 
                          onPress={goBack}>
            <Icon name={'caret-back-outline'} 
                  size={90} 
                  color={'black'}/>
        </TouchableOpacity>
  )
}
  