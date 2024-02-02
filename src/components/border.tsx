import React from 'react'
import { RegisteredStyle, StyleSheet, View, ViewStyle } from 'react-native'

type IBorder = {
  children?: React.ReactNode;
  styles?: ViewStyle | RegisteredStyle<ViewStyle> | (ViewStyle | RegisteredStyle<ViewStyle>)[];
}

export const Border = ({ children, styles} : IBorder) => {
  return (
    <View 
      style={[borderStyles.border, ...(Array.isArray(styles) ? styles : [styles])]}
    >
      { children }
    </View>
  )
};

const borderStyles = StyleSheet.create({
  border: {
    borderRadius: 24,
    padding: 12,
    backgroundColor: '#AEADAD',
  },
})
