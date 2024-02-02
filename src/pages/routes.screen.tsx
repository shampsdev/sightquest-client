import { ScrollView, View } from 'react-native'
import React from 'react'
import { ScreenHeaderBack } from '@/components/screen-header-back'
import { Border } from '@/components/border'
import { CustomText } from '@/components/ui/custom-text'
import { Section } from '@/components/section'
import { Layout } from '@/components/layout'
import { UserAmount } from '@/components/user-amount'
import { StatisticBar } from '@/components/ui/statistic-bar'

export function RoutesScreen() {
  return (
    <View className='h-full'>
      <ScrollView className='pt-10'>
        <ScreenHeaderBack/>
        <Layout>
          <Section styles={{
            gap: 16,
          }} text='Выбрать маршрут'>
            { [1, 2, 3].map((_, index) =>
              <Border styles={{
                gap: 12,
              }} key={index}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}> 
                  <CustomText styles={{
                    width: '60%',
                  }} size='lg'>
                    Василеостровский район
                  </CustomText>

                  <UserAmount
                    amount={152}
                  />
                </View>

                <StatisticBar
                  amount={7}
                  total={10}
                />
              </Border>
            ) }
          </Section>
        </Layout>
      </ScrollView>
    </View>
  )
}