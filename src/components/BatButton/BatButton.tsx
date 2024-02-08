import React from 'react';

import {
  Button,
  View,
  Text, 
  Pressable
} from 'react-native';

import { styles } from './Style';

export function BatButton(){
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {console.log("olá")}}
        title='Click Aqui'
        accessibilityLabel='click em mim'
        color="#831584"
      />

      <Pressable
        onPress={()=>{console.log('fui pressionado')}}
      >
        <Text>⚡ COPY</Text>
      </Pressable>
    </View>
  );
}