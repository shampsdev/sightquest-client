import React from 'react'
import { View } from 'react-native'

const products = [1, 2, 3];

export const Store = () => {
  return (
    <View className='pt-6'>
      { products.map((_, index) => (
        <View key={index} className='w-32 h-32 bg-black'>
          
        </View>
      )) }
    </View>
  )
}
