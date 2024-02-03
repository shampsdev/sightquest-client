import React from 'react'
import { CustomText } from './ui/custom-text'
import { RegisteredStyle, View, ViewStyle } from 'react-native'

type ISection = {
  text?: string; 
  children: React.ReactNode
  styles?: ViewStyle | RegisteredStyle<View>;
  openAll?: boolean;
}

export const Section = ({ text, children }: ISection) => {
  // const headerStyle = openAll ? headerStyles.
  return (
    <View>
      <CustomText size='lg' styles={{
        marginBottom: 8,
      }}>{ text }</CustomText>
      { children }
    </View>
  )
}


// const headerStyles = StyleSheet.create({
//   headerWithAll: {

//   },
//   header: {

//   }
// })