import { ScrollView, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ScreenHeaderBack } from '@/components/screen-header-back'
import { CustomText } from '@/components/ui/custom-text'
import { Section } from '@/components/section'
import { Layout } from '@/components/layout'
import { UserAmount } from '@/components/user-amount'
import { StatisticBar } from '@/components/ui/statistic-bar'
import useGameSettings from '@/stores/game-settings.store'
import { globalStyles } from '@/styles/global.style'
import { useNavigation } from '@react-navigation/native'
import { IRoute } from '@/interfaces/IRoute'
import { colors } from '@/constants/colors'

const routes: IRoute[] = [
  {
    title: "Стрелка В.О.",
    popularity: 152,
    questPoints: [],
    complexity: 5,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo nobis repellat ullam cumque temporibus modi commodi soluta, aspernatur amet id consequuntur, tempore dolore, deserunt itaque ipsum assumenda vel consectetur.',
  }, 
  {
    title: "Петроградский район",
    popularity: 190,    
    questPoints: [],
    complexity: 3,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo nobis repellat ullam cumque temporibus modi commodi soluta, aspernatur amet id consequuntur, tempore dolore, deserunt itaque ipsum assumenda vel consectetur.',
  }, 
  {
    title: "Купчино",
    popularity: 1,
    questPoints: [],
    complexity: 10,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo nobis repellat ullam cumque temporibus modi commodi soluta, aspernatur amet id consequuntur, tempore dolore, deserunt itaque ipsum assumenda vel consectetur.',
  }, 
]

export function RoutesScreen() {
  const { selectRoute } = useGameSettings();
  const navigation = useNavigation();

  const routeClickHandle = (route: IRoute) => {
    selectRoute(route);
    navigation.goBack();
  }

  return (
    <View className='min-h-full bg-background'>
      <ScrollView 
        className='pt-[13%]'
      >
        <ScreenHeaderBack/>
        <Layout>
          <Section styles={{
            gap: 16,
          }} text='Выбрать маршрут'>
            { routes.map((value, index) =>
              <TouchableOpacity 
                onPress={() => routeClickHandle(value)}
                style={[
                  globalStyles.border, 
                  {
                    gap: 12,
                    backgroundColor: colors.secondary
                  }
                ]} 
                key={index}
              >
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}> 
                  <CustomText styles={{
                    width: '60%',
                    color: colors.primary
                  }} size='lg'>
                    { value.title }
                  </CustomText>

                  <UserAmount
                    amount={value.popularity}
                  />
                </View>

                <StatisticBar
                  mainBarColor={colors.darkPrimary}
                  secondBarColor={colors.primary}
                  textColor={colors.secondary}
                  amount={7}
                  total={10}
                />
              </TouchableOpacity>
            ) }
          </Section>
        </Layout>
      </ScrollView>
    </View>
  )
}