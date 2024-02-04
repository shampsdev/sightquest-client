import { Card } from '@/components/ui/card';
import { CustomText } from '@/components/ui/custom-text';
import { globalStyles } from '@/styles/global.style';
import React from 'react'
import { ImageSourcePropType } from 'react-native';

export type PromocodProps = {
  title: string;
  image: ImageSourcePropType;
}

export const Promocod = (props: PromocodProps) => {
  return (
    <Card image={props.image}>
      <CustomText
        styles={[globalStyles.border, {
          position: 'absolute',
          paddingVertical: 6,
          bottom: 8,
          left: 8
        }]}
      >
        { props.title }
      </CustomText>
    </Card>
  )
}
