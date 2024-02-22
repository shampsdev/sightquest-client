import PlusIcon from '@/assets/icons/plus.icon';
import { Section } from '@/components/section';
import { colors } from '@/constants/colors';
import { IUserState } from '@/interfaces/IUserState';
import React from 'react';
import { Alert, Image, Share, TouchableOpacity, View } from 'react-native';

interface ITeamPickerProps {
  players: IUserState[];
  code: string;
}

export const TeamPicker = ({ players, code }: ITeamPickerProps) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: 'Код для лобби',
        message: code,
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
    <Section text='Вы создали команду'>
      <View className='relative h-20'>
        <TouchableOpacity
          onPress={onShare}
          className='absolute z-50 left-0 bottom-0 h-20 w-20 rounded-3xl bg-primary'
        >
          <PlusIcon fill={colors.secondary} className='m-auto' />
        </TouchableOpacity>
        {players.map((_, indx) => (
          <Image
            source={require('@/assets/default-avatar.jpg')}
            key={indx}
            style={{
              position: 'absolute',
              left: 20 + 48 * (indx + 1),
              bottom: 6,
              width: 64,
              height: 64,
              zIndex: players.length - indx,
              borderRadius: 100,
              borderWidth: 2,
              borderColor: colors.primary,
            }}
          />
        ))}
      </View>
    </Section>
  );
};
