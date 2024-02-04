import { Border } from '@/components/border'
import { Card } from '@/components/ui/card'
import { CustomText } from '@/components/ui/custom-text'
import React from 'react'
import { ImageProps } from 'react-native'

export type BestRouteType = {
  title: string;
  amount: string;
  image: ImageProps;
}

export const BestRoute = (props: BestRouteType) => {
  return (
    <Card image={props.image}>
      <Border
        styles={{
          position: 'absolute',
          paddingBottom: 4, 
          paddingTop: 4, 
          paddingLeft: 12, 
          paddingRight: 12,
          top: 8,
          left: 8,
        }}
      >
        <CustomText>
          { props.title }
        </CustomText>
      </Border>

      <CustomText
        styles={{
          position: 'absolute',
          right: 20,
          bottom: 20,
        }}
      >
        { props.amount }
      </CustomText>
    </Card>
  )
}
