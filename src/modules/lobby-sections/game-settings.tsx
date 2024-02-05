import PlusIcon from '@/assets/icons/plus.icon';
import { Border } from '@/components/border';
import { CustomText } from '@/components/ui/custom-text';
import { borderRadius, colors } from '@/constants/colors';
import { globalStyles } from '@/styles/global.style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Alert, ImageBackground, Share, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../navigation/root-navigator';
import useGameSettings from '@/stores/game-settings.store';
import { ISettings } from '@/interfaces/ISettings';

interface IGameSettingsProps {
  settings: ISettings;
  code: string;
}

export const GameSettings = ({ code }: IGameSettingsProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const selectedRoute = useGameSettings((state) => state.route);

  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Код для лобби',
        message: code,
        url: 'https://google.com',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };


  return (
    <Border
      styles={{
        backgroundColor: colors.whiteDark,
        gap: 4,
      }}
    >
      <ImageBackground
        style={{
          position: 'relative',
          height: 120,
          width: '100%',
        }}
        borderRadius={borderRadius}
        source={require('@/assets/123.jpg')}
      >
        <CustomText
          styles={{
            position: 'absolute',
            bottom: 8,
            left: 8,
            color: colors.primary,
          }}
          size='3xl'
        >
          01 :20 :59
        </CustomText>
      </ImageBackground>
      <View
        style={{
          gap: 4,
        }}
        className='flex-row justify-center'
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('RoutesScreen');
          }}
          style={[
            globalStyles.border,
            {
              width: '49%',
              height: 120,
              position: 'relative',
              backgroundColor: colors.secondary,
            },
          ]}
        >
          <CustomText
            size='lg'
            styles={{
              color: colors.primary,
            }}
          >
            Маршрут
          </CustomText>

          <PlusIcon
            style={{
              position: 'absolute',
              left: 16,
              bottom: 16,
            }}
          />
        </TouchableOpacity>
        <Border
          styles={{
            width: '49%',
            backgroundColor: colors.secondary,
          }}
        >
          <CustomText
            size='lg'
            styles={{
              color: colors.primary,
            }}
          >
            Сложность
          </CustomText>
          <CustomText
            styles={{
              position: 'absolute',
              left: 16,
              bottom: 16,
              color: colors.primary,
            }}
            size='2xl'
          >
            {`${selectedRoute?.complexity ?? 0} / 10`}
          </CustomText>
        </Border>
      </View>
      <View style={{
        gap: 12,
        flexDirection: 'row',
        alignContent: 'center'
      }}>
        <TouchableOpacity
          onPress={onShare}
        >
          <CustomText
            styles={{
              marginLeft: 4,
            }}
            size='lg'
          >
            {`#${code}`}
          </CustomText>
        </TouchableOpacity>
      </View>
    </Border>
  );
};
