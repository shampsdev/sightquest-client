import React from 'react'
import { CustomText } from './ui/custom-text'
import { RegisteredStyle, View, ViewStyle } from 'react-native'

type ISection = {
  text?: string; 
  children: React.ReactNode
  styles?: ViewStyle | RegisteredStyle<View>;
}

export const Section = ({ text, children, styles }: ISection) => {
  return (
    <View style={styles}>
      <CustomText size='lg' styles={{
        marginBottom: 8,
      }}>{ text }</CustomText>
      { children }
    </View>
  )
}
