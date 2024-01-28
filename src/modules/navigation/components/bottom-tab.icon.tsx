import React from 'react'
import HomeIcon from '@/assets/icons/home.icon'
import SettingsIcon from '@/assets/icons/settings.icon'
import { View } from 'react-native';

type Props = {
  route: string;
  isFocused: boolean;
}

export const BottomTabIcon = ({ route, isFocused }: Props) => {
  const renderIcon = (route: string, isFocused: boolean) => {
    const height = 32;
    const width = 32;
  
    switch(route) {
      case "Home": 
        return <HomeIcon 
          width={width} 
          height={height} 
          fill={isFocused ? "#0067FF": "white"}
        />
      case "Settings": 
        return <SettingsIcon 
          width={width} 
          height={height} 
          fill={isFocused ? "#0067FF": "white"}
        />
      default:
        return <HomeIcon 
          width={width} 
          height={height} 
          fill={isFocused ? "#0067FF": "white"}
        />
    }
  }
  
  return (
    <View>
      { renderIcon(route, isFocused) }
    </View>
  )
}
