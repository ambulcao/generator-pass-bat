import React from "react"
import { Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import HomeStyles from '../Home/HomeStyle'

export default function Home() {
  return(
    <View style={HomeStyles.container}>
      <Text>Home works!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}