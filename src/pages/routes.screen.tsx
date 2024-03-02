import { ScrollView, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ScreenHeaderBack } from '@/components/screen-header-back';
import { CustomText } from '@/components/ui/custom-text';
import { Section } from '@/components/section';
import { Layout } from '@/components/layout';
import { UserAmount } from '@/components/user-amount';
import { StatisticBar } from '@/components/ui/statistic-bar';
import { globalStyles } from '@/styles/global.style';
import { useNavigation } from '@react-navigation/native';
import { IRoute } from '@/interfaces/IRoute';
import { colors } from '@/constants/colors';
import useGameSettings from '@/stores/game-settings.store';

const routes: IRoute[] = [
  {
    id: 1,
    title: 'Васильевский остров',
    complexity: 0,
    popularity: 0,
    quest_points: [
      {
        id: 1,
        title: 'Стрелка В.О',
        description: 'Раньше этот остров называли Хирвасаатри',
        location: {
          latitude: 59.944049,
          longitude: 30.30645,
        },
        image:
          'https://storage.yandexcloud.net/sightquest-data/quest_points/UglyPig.png',
        city: 1,
        tasks: [
          {
            id: 1,
            title: 'На высоте',
            description: 'Заберитесь на колонну и сделайте селфи',
          },
          {
            id: 2,
            title: 'На дне',
            description: 'Окунитесь в реку и сделайте селфи',
          },
        ],
      },
    ],
  },
  {
    id: 34,
    title: 'Не выбирайте этот маршрут',
    complexity: 0,
    popularity: 0,
    quest_points: [
      {
        id: 1,
        title: 'Стрелка В.О',
        description: 'Раньше этот остров называли Хирвасаатри',
        location: {
          latitude: 59.944049,
          longitude: 30.30645,
        },
        image:
          'https://storage.yandexcloud.net/sightquest-data/quest_points/UglyPig.png',
        city: 1,
        tasks: [
          {
            id: 1,
            title: 'На высоте',
            description: 'Заберитесь на колонну и сделайте селфи',
          },
          {
            id: 2,
            title: 'На дне',
            description: 'Окунитесь в реку и сделайте селфи',
          },
        ],
      },
    ],
  },
];

export function RoutesScreen() {
  const { selectRoute } = useGameSettings();
  const navigation = useNavigation();

  const routeClickHandle = (route: IRoute) => {
    selectRoute(route);
    navigation.goBack();
  };

  return (
    <View className='min-h-full bg-background'>
      <ScrollView className='pt-[13%]'>
        <ScreenHeaderBack />
        <Layout>
          <Section
            styles={{
              gap: 16,
            }}
            text='Выбрать маршрут'
          >
            {routes.map((value, index) => (
              <TouchableOpacity
                onPress={() => routeClickHandle(value)}
                style={[
                  globalStyles.border,
                  {
                    gap: 12,
                    backgroundColor: colors.secondary,
                  },
                ]}
                key={index}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <CustomText
                    styles={{
                      width: '60%',
                      color: colors.primary,
                    }}
                    size='lg'
                  >
                    {value.title}
                  </CustomText>

                  <UserAmount amount={value.popularity} />
                </View>

                <StatisticBar
                  mainBarColor={colors.darkPrimary}
                  secondBarColor={colors.primary}
                  textColor={colors.secondary}
                  amount={value.complexity}
                  total={10}
                />
              </TouchableOpacity>
            ))}
          </Section>
        </Layout>
      </ScrollView>
    </View>
  );
}
