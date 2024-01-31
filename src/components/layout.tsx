import React from 'react'
import { View } from 'react-native'

export type ILayout = {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <View className='w-[90%] mx-auto'>
      { children }
    </View>
  )
}
