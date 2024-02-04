import React from 'react';
import HomeIcon from '@/assets/icons/home.icon';
import { View } from 'react-native';
import ProfileIcon from '@/assets/icons/profile.icon';
import PlayIcon from '@/assets/icons/play.icon';
import { StoreIcon } from '@/assets/icons/store.icon';

type Props = {
  route: string;
  isFocused: boolean;
};

export const BottomTabIcon = ({ route }: Props) => {
  const renderIcon = (route: string) => {
    const height = 32;
    const width = 32;

    switch (route) {
      case 'HomeTab':
        return (
        <HomeIcon 
          width={width}
          height={height} 
         />
        );
      case 'ProfileTab':
        return (
          <ProfileIcon
            width={width}
            height={height}
          />
        );
      case 'StoreTab':
        return (
          <StoreIcon
            width={width}
            height={height}
          />
        );
      case 'FriendsTab':
        return <PlayIcon width={width} height={height} />;
      default:
        return <HomeIcon width={width} height={height} />;
    }
  };

  return <View>{renderIcon(route)}</View>;
};
