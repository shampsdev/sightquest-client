import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { CityCard, CityCardProps } from './components/city-card';
import { View } from 'react-native';

type CityCardsProps = {
  data: CityCardProps[];
}

export const CityCards = ({ data }: CityCardsProps) => {
  return (
    <FlatList 
      data={data}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      renderItem={({ item, index }) => {
        return (
          <CityCard cityTitle={item.cityTitle} amount={item.amount}/>
        )
      }}    
    />
    )
}
