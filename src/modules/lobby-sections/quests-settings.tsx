import { Border } from '@/components/border'
import { Section } from '@/components/section'
import { CustomText } from '@/components/ui/custom-text'
import { colors } from '@/constants/colors'
import { globalStyles } from '@/styles/global.style'
import React from 'react'
import { View } from 'react-native'

export const QuestsSettings = () => {
  return (
    <Section styles={{
        gap: 12,
      }} text='Точки активности'>
      { [1, 2, 3].map((_, indx) => 
          <View
            key={indx}
            style={[
              globalStyles.border, 
              {
                flexDirection: indx % 2 ? 'row' : 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                backgroundColor: colors.whiteDark
              }
            ]}
          >
            <Border styles={{
              borderRadius: 12,
              paddingHorizontal: 20,
              backgroundColor: colors.secondary,
            }}>
              <CustomText styles={{
                color: colors.primary
              }} size='lg'>{`${indx + 1}`}</CustomText>
            </Border>
            <CustomText size='lg'>
              Спас на крови
            </CustomText>
          </View>) }
      </Section>
  )
}
