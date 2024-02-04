import React from 'react'
import { FlatList } from 'react-native'
import { Promocode, PromocodProps } from './components/promocode';

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

export const Promocodes = () => {
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
          <Promocode { ...item }/>
        )
      }}    
    />
  )
}
