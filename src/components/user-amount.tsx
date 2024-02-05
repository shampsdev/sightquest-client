import React from 'react';
import { Border } from './border';
import GroupIcon from '@/assets/icons/group.icon';
import { CustomText } from './ui/custom-text';
import { RegisteredStyle, View, ViewStyle } from 'react-native';

type UserAmountProps = {
  amount?: number;
  styles?: ViewStyle | RegisteredStyle<View>;
};

export const UserAmount = ({ amount, styles }: UserAmountProps) => {
  return amount ? (
    <Border
      styles={[
        {
          gap: 10,
          flexDirection: 'row',
          alignItems: 'center',
        },
        styles,
      ]}
    >
      <GroupIcon />
      <CustomText>{`+${amount}`}</CustomText>
    </Border>
  ) : null;
};
