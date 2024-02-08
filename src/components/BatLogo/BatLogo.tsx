import React from 'react';
import batLogo from '../../../assets/bat-logo.png'
import { BatStyle } from '../BatLogo/style'

import {
  Text,
  View,
  Image
} from 'react-native';


export function BatLogo(){
  return (
    <>
      <Text style={BatStyle.title}>GENERATOR PASS BAT</Text>
      <Image 
        source={batLogo}
        style={{
          resizeMode: 'contain',
          height: 180
        }}
      />
    </>
  );
}