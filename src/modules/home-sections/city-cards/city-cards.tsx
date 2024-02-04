import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { CityCard, CityCardProps } from './components/city-card';

type CityCardsProps = {
  data: CityCardProps[];
}

export const CityCards = ({ data }: CityCardsProps) => {
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
          <CityCard {...item}/>
        )
      }}    
    />
    )
}
