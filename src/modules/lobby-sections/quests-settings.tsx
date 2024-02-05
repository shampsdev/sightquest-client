import { Border } from '@/components/border';
import { Section } from '@/components/section';
import { CustomText } from '@/components/ui/custom-text';
import { colors } from '@/constants/colors';
import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { globalStyles } from '@/styles/global.style';
import React from 'react';
import { View } from 'react-native';

interface IQuestSettingsProps {
  quest_points: IQuestPoint[];
}

export const QuestsSettings = ({ quest_points }: IQuestSettingsProps) => {
  return (
    <Section
      styles={{
        gap: 12,
      }}
      text='Точки активности'
    >
      {quest_points.map((point, indx) => (
        <View
          key={indx}
          style={[
            globalStyles.border,
            {
              flexDirection: indx % 2 ? 'row' : 'row-reverse',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              backgroundColor: colors.whiteDark,
            },
          ]}
        >
          <Border
            styles={{
              borderRadius: 12,
              paddingHorizontal: 20,
              backgroundColor: colors.secondary,
            }}
          >
            <CustomText
              styles={{
                color: colors.primary,
              }}
              size='lg'
            >{`${indx + 1}`}</CustomText>
          </Border>
          <CustomText size='lg'>{point.title}</CustomText>
        </View>
      ))}
    </Section>
  );
};
