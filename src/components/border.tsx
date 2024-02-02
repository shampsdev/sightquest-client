import React from 'react'
import { RegisteredStyle, StyleSheet, View, ViewStyle } from 'react-native'

type IBorder = {
  children?: React.ReactNode;
  styles?: ViewStyle | RegisteredStyle<ViewStyle>;
  ref?: React.RefObject<View>;
}

export const Border = ({ children, styles, ref } : IBorder) => {
  return (
    <View 
      ref={ref}
      style={[borderStyles.border, styles]}
    >
      { children }
    </View>
  )
}

const borderStyles = StyleSheet.create({
  border: {
    borderRadius: 24,
    padding: 12,
    backgroundColor: '#AEADAD',
  },
})
