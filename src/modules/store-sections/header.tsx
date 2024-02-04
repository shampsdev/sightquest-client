import { CustomText } from '@/components/ui/custom-text'
import { globalStyles } from '@/styles/global.style'
import React from 'react'
import { View } from 'react-native'

export const Header = () => {
  return (
    <View className='flex-row justify-around'>
      <CustomText styles={[globalStyles.border, {
        width: 140,
        textAlign: 'center'
      }]} size='lg'>Для бегуна</CustomText>
      <CustomText styles={[globalStyles.border, {
        width: 140,
        textAlign: 'center'
      }]} size='lg'>Для ловца</CustomText>
    </View>
  )
}
