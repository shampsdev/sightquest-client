import GroupIcon from '@/assets/icons/group.icon'
import { Border } from '@/components/border'
import { CustomText } from '@/components/ui/custom-text'
import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native'

export type CityCardProps = {
  cityTitle: string;
  amount: string;
}

export const CityCard = ({ cityTitle, amount }: CityCardProps) => {

  return (
    <View className='h-72 w-72 mr-2 bg-primary rounded-3xl relative'>
      <Border
        styles={{
          backgroundColor: 'white',
          position: 'absolute',
          top: 8,
          left: 8,
        }}
      >
        <CustomText
          styles={{
            flexDirection: 'row'
          }}
        >{ cityTitle }</CustomText>
      </Border>
      <Border
        styles={{
          backgroundColor: 'white',
          position: 'absolute',
          gap: 10,
          flexDirection: 'row',
          alignItems: 'center',
          bottom: 8, 
          left: 8
        }}
      >
        <GroupIcon/>
        <CustomText>{ `+${amount}` }</CustomText>
      </Border>
    </View>
  )
}
