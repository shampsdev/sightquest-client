import React from 'react'
import { RegisteredStyle, View, ViewStyle } from 'react-native'

export type ILayout = {
  children: React.ReactNode;
  styles?: ViewStyle | RegisteredStyle<ViewStyle>;
}

export const Layout = ({ children, styles }: ILayout) => {
  return (
    <View 
      style={[
        {
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
        styles
      ]}
    >
      { children }
    </View>
  )
}
