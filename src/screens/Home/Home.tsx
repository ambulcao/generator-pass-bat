import React from "react"
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import HomeStyles from '../Home/Style'
import { BatLogo } from "../../components/BatLogo/BatLogo"

export default function Home() {
  return(
    <View style={HomeStyles.appContainer}>

      <View style={HomeStyles.logoContainer}>
        <BatLogo/>
      </View>

      <Text>Home works!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}