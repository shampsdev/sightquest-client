import React from 'react'
import { CustomText } from './ui/custom-text'
import { RegisteredStyle, View, ViewStyle } from 'react-native'

type ISection = {
  text?: string; 
  children: React.ReactNode
}

export const Section = ({ text, children }: ISection) => {
  return (
    <View>
      <CustomText size='lg' styles={{
        marginBottom: 8,
      }}>{ text }</CustomText>
      { children }
    </View>
  )
}
