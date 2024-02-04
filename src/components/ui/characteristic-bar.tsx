import { colors } from '@/constants/colors';
import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native';
import { CustomText } from './custom-text';

type CharacteristicBarProps = {
  amount: number;
  total: number;
  icon: React.JSX.Element;
  styles?: ViewStyle;
}

export const CharacteristicBar = (props: CharacteristicBarProps) => {
  return props.amount && props.total ? (
    <View 
      style={[
        styles.mainBar,
        props.styles,
      ]}
    >
      <View style={[{
        width: `${props.amount / props.total * 100}%`,  
      }, styles.secondBar]}>
        <View
          style={styles.icon}
        >
          {props.icon}
        </View>
        <CustomText size='lg'>{ `${props.amount}` }</CustomText>
      </View>
    </View>
  )
  : (
    null
  )
}

const styles = StyleSheet.create({
  mainBar: {
    height: 48,
    backgroundColor: colors.primaryWithOpacity,
    borderRadius: 100,
  },
  secondBar: {
    borderRadius: 100,
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 12,
    minWidth: 70,
    flexDirection: 'row',
    position: 'relative',
    backgroundColor: colors.primary,
  },
  icon: {
    position: 'absolute',
    left: 12,
  }
})