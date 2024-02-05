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
    title: 'Стрелка В.О.',
    popularity: 152,
    questPoints: [
      {
        title: 'Стрелка В.О.',
        description: 'Раньше этот остров называли Хирвасаатри',
        location: {
          latitude: 59.944049,
          longitude: 30.30645,
        },
        tasks: [],
        photo:
          'https://i6.photo.2gis.com/images/geo/0/30258560058537396_8894_656x340.jpg',
      },
      {
        title: 'Кунсткамера',
        description: 'Первый публичный музей Европы.',
        location: {
          latitude: 59.94134,
          longitude: 30.302521,
        },
        tasks: [],
        photo:
          'https://i8.photo.2gis.com/images/branch/0/30258560088639614_d3e4_656x340.jpg',
      },
      {
        title: 'Эрмитаж',
        description: 'Коллекция составляет более 3 миллионов экспонатов.',
        location: {
          latitude: 59.940485,
          longitude: 30.31408,
        },
        tasks: [],
        photo:
          'https://i6.photo.2gis.com/images/branch/0/30258560078475071_04cc_656x340.jpg',
      },
    ],
    complexity: 5,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo nobis repellat ullam cumque temporibus modi commodi soluta, aspernatur amet id consequuntur, tempore dolore, deserunt itaque ipsum assumenda vel consectetur.',
  },
  {
    title: 'Петроградский район',
    popularity: 190,
    questPoints: [],
    complexity: 3,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo nobis repellat ullam cumque temporibus modi commodi soluta, aspernatur amet id consequuntur, tempore dolore, deserunt itaque ipsum assumenda vel consectetur.',
  },
  {
    title: 'Купчино',
    popularity: 1,
    questPoints: [],
    complexity: 10,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quo nobis repellat ullam cumque temporibus modi commodi soluta, aspernatur amet id consequuntur, tempore dolore, deserunt itaque ipsum assumenda vel consectetur.',
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
