import React from "react";
import Icon  from "react-native-vector-icons/Ionicons";
import cameraStyles from '../styles/cameraStyles'
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

interface NavBarProps {
      goBack: () => void
}

const NavBar : React.FC<NavBarProps> = ({goBack}) => {
  return (
        <TouchableOpacity style={navBarStyles.navBarRow} 
                          onPress={goBack}>
            <Icon name={'caret-back-outline'} 
                  size={90} 
                  color={'black'}/>
        </TouchableOpacity>
  )
}

export default NavBar


let navBarStyles = StyleSheet.create({
      navBarRow : {position: "absolute", 
      width: '100%', 
      height: '15%', 
      zIndex: 2, 
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center'}
})
  