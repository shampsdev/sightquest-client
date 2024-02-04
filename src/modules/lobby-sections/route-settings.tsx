import { Border } from '@/components/border'
import { Section } from '@/components/section'
import { CustomText } from '@/components/ui/custom-text'
import { UserAmount } from '@/components/user-amount'
import useGameSettings from '@/stores/game-settings.store'
import React from 'react'

export const RouteSettings = () => {
  const selectedRoute = useGameSettings(state => state.route);

  return (
    <Section
      text='Ваш маршрут'
    >
      <Border styles={{
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <CustomText size='lg'>{ selectedRoute?.title ?? 'Не выбран' }</CustomText>
        <UserAmount amount={selectedRoute?.popularity ?? 0 }/>
      </Border>
    </Section>
  )
}
