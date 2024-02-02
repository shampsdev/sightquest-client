import React from 'react'
import { View } from 'react-native'
import { CustomText } from './custom-text';

export type StatisticBarProps = {
  amount: number; 
  total: number;
}

export const StatisticBar = ({ amount, total }: StatisticBarProps) => {
  return (
    <View className='w-full h-12 bg-secondary rounded-full'>
      <View style={{
        borderRadius: 100,
        height: '100%',
        width: `${amount / total * 100}%`,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 12,
        flexDirection: 'row',
        backgroundColor: 'black',
      }}>
        <CustomText
          styles={{
            color: 'white',
          }}
          size='lg'
        >{`${amount}`}</CustomText>
      </View>
    </View>
  )
}
