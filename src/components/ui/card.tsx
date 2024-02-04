import { borderRadius } from '@/constants/colors'
import React from 'react'
import { ImageBackground, ImageSourcePropType } from 'react-native'

export const Card = ({ children, image }: { children: React.ReactNode, image: ImageSourcePropType }) => {
  return (
    <ImageBackground 
      source={ image }
      style={{
        height: 140,
        width: 200,
        marginRight: 8,
        position: 'relative'
      }}
      borderRadius={borderRadius}
    >
      { children }
    </ImageBackground>
  )
}
