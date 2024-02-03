import { Border } from '@/components/border'
import { CustomText } from '@/components/ui/custom-text'
import React from 'react'
import { View } from 'react-native'

export type BestRouteType = {
  title: string;
  amount: string;
}

export const BestRoute = ({ title, amount }: BestRouteType) => {
  return (
    <Border 
      styles={{
        height: 140,
        width: 200,
        marginRight: 8,
        position: 'relative'
      }}
    >
      <Border
        styles={{
          position: 'absolute',
          backgroundColor: 'white',
          paddingBottom: 4, 
          paddingTop: 4, 
          paddingLeft: 12, 
          paddingRight: 12,
          top: 8,
          left: 8,
        }}
      >
        <CustomText>
          { title }
        </CustomText>
      </Border>

      <View
        className='absolute bottom-4 left-4 flex-row '
      >
        {
        ([1, 2, 3, 4,].map((value, indx) => (
          <View key={indx} className='bg-secondary border-2 border-black rounded-full w-6 h-6'/>
        )))
        }
      </View>
      <CustomText
        styles={{
          position: 'absolute',
          right: 20,
          bottom: 20,
        }}
      >
        { amount }
      </CustomText>
    </Border>
  )
}
