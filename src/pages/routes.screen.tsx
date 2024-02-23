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
    title: 'Стрелка В.О.',
    complexity: 5,
    popularity: 152,
    quest_points: [
      {
        id: 1,
        title: 'Стрелка В.О.',
        description: 'Раньше этот остров называли Хирвасаатри',
        location: {
          latitude: 59.944049,
          longitude: 30.30645,
        },
        image:
          'https://storage.yandexcloud.net/sightquest-data/quest_points/photo_2024-02-18_18.02.45.jpeg',
        city: 1,
        tasks: [
          {
            id: 1,
            title: 'Пососи хуйца)',
            description: 'да',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Петроградский район',
    complexity: 3,
    popularity: 190,
    quest_points: [],
  },
  {
    id: 3,
    title: 'Купчино',
    complexity: 10,
    popularity: 1,
    quest_points: [],
  },
  {
    id: 4,
    title: 'Apple District',
    complexity: 10,
    popularity: 999,
    quest_points: [
      {
        id: 4,
        title: 'Sam H. Lawson Middle School',
        description: 'No description',
        location: {
          latitude: 37.329804895,
          longitude: -122.02721165,
        },
        image:
          'https://storage.yandexcloud.net/sightquest-data/quest_points/2019-09-02.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEGmEHnIRlYVnZuRT-2HcK%2F20240222%2Fstorage%2Fs3%2Faws4_request&X-Amz-Date=20240222T235550Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=9e82e7e53934c079c65dbed43f554a424b594610f29211a397b9c39b2cb64736',
        city: 2,
        tasks: [
          {
            id: 2,
            title: 'Всегда готов',
            description: 'тебя трахнуть дорогой\r\nxoxo',
          },
        ],
      },
      {
        id: 5,
        title: 'Portal Park',
        description: 'No description',
        location: {
          latitude: 37.326030061,
          longitude: -122.0204065,
        },
        image:
          'https://storage.yandexcloud.net/sightquest-data/quest_points/IMG_20190716_204453-2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=YCAJEGmEHnIRlYVnZuRT-2HcK%2F20240222%2Fstorage%2Fs3%2Faws4_request&X-Amz-Date=20240222T235550Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0e3f87e3c64cc87a620afcec1f350464a1abdf2e23d8a871ffa822f41617e9c0',
        city: 2,
        tasks: [
          {
            id: 3,
            title: 'Penis',
            description: 'long',
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
