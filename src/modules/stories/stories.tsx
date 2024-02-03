import React from 'react'
import { View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Story } from './story';

type StoriesProps = {
  data: string[];
}

export const Stories = ({ data } : StoriesProps) => {
  return (
    <FlatList
      data={data}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      renderItem={({ item, index }) => {
        return (
          <Story image={item} text='Сторис' index={index}/>
        )
      }}
    >
      
    </FlatList>
  )
}
