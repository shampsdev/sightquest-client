import React from 'react';
import HomeIcon from '@/assets/icons/home.icon';
import SettingsIcon from '@/assets/icons/settings.icon';
import { View } from 'react-native';
import ProfileIcon from '@/assets/icons/profile.icon';

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
        return <HomeIcon width={width} height={height} fill={'white'} />;
      case 'ProfileTab':
        return (
          <ProfileIcon
            color={isFocused ? '#94a3b8' : '#64748b'}
            width={width}
            height={height}
            fill={'white'}
          />
        );
      case 'FriendsTab':
        return <SettingsIcon width={width} height={height} fill={'white'} />;
      default:
        return <HomeIcon width={width} height={height} fill={'white'} />;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};
