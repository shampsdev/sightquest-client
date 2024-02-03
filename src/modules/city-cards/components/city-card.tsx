import { Border } from '@/components/border'
import { CustomText } from '@/components/ui/custom-text'
import { UserAmount } from '@/components/user-amount'
import React from 'react'
import { View } from 'react-native'

export type CityCardProps = {
  cityTitle: string;
  amount: number;
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
      <UserAmount
        styles={{
          position: 'absolute',
          bottom: 8, 
          left: 8,
        }}
        amount={amount}
      />
    </View>
  )
}
