import React from 'react';
import HomeIcon from '@/assets/icons/home.icon';
import SettingsIcon from '@/assets/icons/settings.icon';
import { View } from 'react-native';
import ProfileIcon from '@/assets/icons/profile.icon';
import RoutesIcon from '@/assets/icons/routes.icon';
import PlayIcon from '@/assets/icons/play.icon';

type Props = {
  route: string;
  isFocused: boolean;
};

export const BottomTabIcon = ({ route, isFocused }: Props) => {
  const renderIcon = (route: string, isFocused: boolean) => {
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
      case 'RoutesTab':
        return (
          <RoutesIcon
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

  return <View>{renderIcon(route, isFocused)}</View>;
};
