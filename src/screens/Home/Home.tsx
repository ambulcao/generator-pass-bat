import React from "react"
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import HomeStyles from '../Home/HomeStyle'
import { Menu } from "../../components/Menu/Menu"

export default function Home() {
  return(
    <View style={HomeStyles.container}>
      <Menu/>
      <Text>Home works!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}