import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'
import { CustomText } from './custom-text';
import { colors } from '@/constants/colors';

export type StatisticBarProps = {
  styles?: ViewStyle;
  mainBarColor?: string;
  secondBarColor?: string;
  textColor?: string;
  amount: number; 
  total: number;
}

export const StatisticBar = (props: StatisticBarProps) => {
  return props.amount && props.total ? (
    <View 
      style={[statisticBarStyles.mainBar, {
        backgroundColor: props.mainBarColor ?? colors.secondary
      }]}
    >
      <View style={[statisticBarStyles.secondBar, {
        backgroundColor: props.secondBarColor ?? "3f3f3f",
        width: `${props.amount / props.total * 100}%`,
      }]}>
        <CustomText
          styles={{
            color: props.textColor ?? 'white',
          }}
          size='lg'
        >{`${props.amount}`}</CustomText>
      </View>
    </View>
  ) : (
    null
  )
}

const statisticBarStyles = StyleSheet.create({
  mainBar: {
    height: 48,
    backgroundColor: colors.secondary,
    borderRadius: 100,
  },
  secondBar: {
    borderRadius: 100,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 12,
    flexDirection: 'row',
    backgroundColor: '#3f3f3f',
  }
})