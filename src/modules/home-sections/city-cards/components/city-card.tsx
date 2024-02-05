import { Border } from '@/components/border';
import { CustomText } from '@/components/ui/custom-text';
import { UserAmount } from '@/components/user-amount';
import { borderRadius } from '@/constants/colors';
import React from 'react';
import { ImageBackground, ImageSourcePropType } from 'react-native';

export type CityCardProps = {
  cityTitle: string;
  amount: number;
  image: ImageSourcePropType;
};

export const CityCard = (props: CityCardProps) => {
  return (
    <ImageBackground
      source={props.image}
      style={{
        height: 288,
        width: 288,
        position: 'relative',
        marginRight: 4,
      }}
      borderRadius={borderRadius}
    >
      <Border
        styles={{
          position: 'absolute',
          top: 8,
          left: 8,
        }}
      >
        <CustomText
          styles={{
            flexDirection: 'row',
          }}
        >
          {props.cityTitle}
        </CustomText>
      </Border>
      <UserAmount
        styles={{
          position: 'absolute',
          bottom: 8,
          left: 8,
        }}
        amount={props.amount}
      />
      {/* </ImageBackground> */}
    </ImageBackground>
  );
};
