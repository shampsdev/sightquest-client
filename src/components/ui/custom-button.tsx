import React from 'react';
import { Pressable, Text } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { twJoin } from 'tailwind-merge';

type ButtonProps = {
  children: string;
  className?: string;
  onPress?: () => void;
  type?: 'primary' | 'secondary';
};

export const CustomButton = ({ 
  children, 
  className, 
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

  const buttonStyles = twJoin(
    `p-4 mx-2 w-32 rounded-2xl`,
    type === 'primary' ? 'bg-primary' : 'bg-secondary',
    className
  );

  const textStyles = twJoin(
    `text-center text-xl`,
    type === 'primary' ? 'text-secondary' : 'text-primary',
    className
  )

  return (
    <Animated.View
      style={[animatedStyle]}
    >
      <Pressable 
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        className={buttonStyles}
      >
        <Text className={textStyles}>{children}</Text>
      </Pressable>
    </Animated.View>
  );
};
