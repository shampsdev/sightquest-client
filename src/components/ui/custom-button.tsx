import { borderRadius, colors } from '@/constants/colors';
import React from 'react';
import { Pressable, RegisteredStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { CustomText } from './custom-text';

type ButtonProps = {
  children: string;
  onPress?: () => void;
  type?: 'primary' | 'secondary';
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: TextStyle | RegisteredStyle<TextStyle>;
};

export const CustomButton = ({ 
  children, 
  containerStyles,
  textStyles, 
  type = 'primary',
  onPress,
}: ButtonProps) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    }
  })
  
  const handlePressIn = () => {
    scale.value = withTiming(0.9, { duration: 100 });
  }

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100 });
  }

  return (
    <Animated.View
      style={[animatedStyle]}
    >
      <Pressable 
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={[buttonStyles.container, {
          backgroundColor: 
            type === 'primary' 
            ? colors.primary
            : colors.secondary,
        }  , containerStyles]}
      >
        <CustomText  
          styles={[buttonStyles.text, {
            color: 
            type === 'primary' 
            ? colors.secondary
            : colors.primary,
          }, textStyles]}
        >
          {children}
        </CustomText>
      </Pressable>
    </Animated.View>
  );
};


// p-4 mx-2 w-32 rounded-2xl
const buttonStyles = StyleSheet.create({
  container: {
    padding: 8,
    width: 100,
    borderRadius: borderRadius,
  },
  text: {
    textAlign: 'center',
  }
})