import { globalStyles } from '@/styles/global.style';
import React from 'react'
import { RegisteredStyle, View, ViewStyle } from 'react-native'

type IBorder = {
  children?: React.ReactNode;
  styles?: ViewStyle | RegisteredStyle<ViewStyle> | (ViewStyle | RegisteredStyle<ViewStyle>)[];
}

export const Border = ({ children, styles} : IBorder) => {
  return (
    <View 
      style={[globalStyles.border, ...(Array.isArray(styles) ? styles : [styles])]}
    >
      { children }
    </View>
  )
};