import React from 'react'
import { View } from 'react-native'
import { twMerge } from 'tailwind-merge';

type IBorder = {
  children?: React.ReactNode;
  className?: string;
}

export const Border = ({ children, className } : IBorder) => {
  return (
    <View className={twMerge('bg-secondary rounded-[24px] p-4', className)}>
      { children }
    </View>
  )
}
