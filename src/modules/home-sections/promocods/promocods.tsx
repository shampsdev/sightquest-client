import React from 'react'
import { FlatList } from 'react-native'
import { Promocod, PromocodProps } from './components/promocod';

const data: PromocodProps[] = [
  {
    title: 'Jack&Chan',
    image: require('@/assets/promo_1.jpg')
  },
  {
    title: 'Flow',
    image: require('@/assets/promo_2.jpg')

  },
  {
    title: 'Bonch',
    image: require('@/assets/promo_3.jpg')
  }
];

export const Promocods = () => {
  return (
    <FlatList
      style={{
        overflow: 'visible'
      }}
      data={data}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      renderItem={({ item }) => {
        return (
          <Promocod { ...item }/>
        )
      }}    
    />
  )
}
