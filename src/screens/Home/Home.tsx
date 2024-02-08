import React from "react"
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import HomeStyles from '../Home/Style'
import { BatLogo } from "../../components/BatLogo/BatLogo"
import { BatTextInput } from "../../components/BatTextInput/BatTextInput"

export default function Home() {
  return(
    <View style={HomeStyles.appContainer}>

      <View style={HomeStyles.logoContainer}>
        <BatLogo/>
      </View>
      
      <View style={HomeStyles.inputContainer} >
        <BatTextInput/>
      </View>
      
      <StatusBar style="light" />
    </View>
  )
}