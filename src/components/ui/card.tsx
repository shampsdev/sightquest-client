import { borderRadius } from '@/constants/colors'
import React from 'react'
import { ImageBackground, ImageSourcePropType, StyleProp, ViewStyle } from 'react-native'

type CardProps = {
  children: React.ReactNode;
  image: ImageSourcePropType;
  styles?: StyleProp<ViewStyle>;
}

export const Card = ({ children, image, styles }: CardProps) => {
  return (
    <ImageBackground   
      source={ image }
      style={[styles ,{
        height: 140,
        width: 200,
        marginRight: 8,
        position: 'relative',
      }]}
      borderRadius={borderRadius}
    >
      { children }
    </ImageBackground>
  )
}
