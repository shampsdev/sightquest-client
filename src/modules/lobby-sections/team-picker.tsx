import PlusIcon from '@/assets/icons/plus.icon';
import { Section } from '@/components/section';
import { colors } from '@/constants/colors';
import { IUserState } from '@/interfaces/IUserState';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

interface ITeamPickerProps {
  players: IUserState[];
}

export const TeamPicker = ({ players }: ITeamPickerProps) => {
  return (
    <Section text='Вы создали команду'>
      <View className='relative h-20'>
        <TouchableOpacity className='absolute z-50 left-0 bottom-0 h-20 w-20 rounded-3xl bg-primary'>
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
