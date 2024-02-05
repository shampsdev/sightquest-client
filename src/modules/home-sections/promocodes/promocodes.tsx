import React from 'react'
import { FlatList } from 'react-native'
import { Promocode } from './components/promocode';
import { IPromocode } from '@/interfaces/IPromocode';

export const Promocodes = ({ data }: {data: IPromocode[]}) => {
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
