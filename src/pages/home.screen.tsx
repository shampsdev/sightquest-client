import { ScrollView, View } from 'react-native';
import React from 'react';
import { ScreenHeader } from '@/components/screen-header';
import { Layout } from '@/components/layout';
import { CustomText } from '@/components/ui/custom-text';
import { Border } from '@/components/border';
import { Section } from '@/components/section';
import { UserCard } from '@/modules/home-sections/user-card/user-card';
import InstaStory from 'react-native-insta-story';
import { CityCards } from '@/modules/home-sections/city-cards/city-cards';
import { BestRoutes } from '@/modules/home-sections/best-routes/best-routes';
import { CreateRoom } from '@/modules/home-sections/create-room';
import { Toasts } from '@backpackapp-io/react-native-toast';
import { Promocodes } from '@/modules/home-sections/promocodes/promocodes';
import { borderRadius, colors } from '@/constants/colors';
import { promocodes } from './promocodes.screen';

const data = [
  {
    user_id: 1,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Правила',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
        swipeText: 'Custom swipe text for this story',
      },
      {
        story_id: 2,
        story_image:
          'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
      },
    ],
  },
  {
    user_id: 2,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Монеты',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 3,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Промокоды',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
  {
    user_id: 3,
    user_image:
      'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    user_name: 'Развитие',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
      },
      {
        story_id: 2,
        story_image:
          'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 2 swiped'),
      },
    ],
  },
];

export const HomeScreen = () => {
  return (
    <ScrollView style={{
      gap: 16,
      paddingTop: '13%',
      backgroundColor: colors.background
    }}>
      <ScreenHeader 
        styles={{
          width: '90%',
          alignSelf: 'center'
        }}
      />
      <InstaStory
        data={data}
        unPressedBorderColor={colors.primary}
        pressedBorderColor={colors.secondary}
        style={{
          height: 150,
        }}
        avatarSize={80}
        avatarTextStyle={{
          fontFamily: 'Inter-Black',
          fontSize: 14,
          alignSelf: 'center'
        }}
        avatarWrapperStyle={{
          borderRadius: 0,
          width: 93,
          height: 103,
          borderBottomRightRadius: borderRadius,
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
          borderBottomLeftRadius: borderRadius,
        }}
        avatarImageStyle={{
          width: 90,
          height: 100,
          borderBottomRightRadius: borderRadius,
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
          borderBottomLeftRadius: borderRadius,
        }}
        duration={5} 
      />

      <Layout
        styles={{
          gap: 16,
        }}
      >
        <Border>
          <CustomText size='2xl'>Привет, Виктор!</CustomText>
          <CustomText size='lg'>Готов играть в догонялки?</CustomText>
        </Border>

        <CreateRoom />

        <Section text='Узнать больше'>
          <CityCards
            data={[
              {
                cityTitle: 'Санкт-Петербург',
                amount: 132,
                image: require('@/assets/Saint_Petes.jpg'),
              },
              {
                cityTitle: 'Москва',
                amount: 182,
                image: require('@/assets/Moscow.jpg'),
              },
              {
                cityTitle: 'Калининград',
                amount: 182,
                image: require('@/assets/Kalinengrad.jpg'),
              },
            ]}
          />
        </Section>
        <Section openAll={true} to='RoutesScreen' text='Топ маршрутов'>
          <BestRoutes
            data={[
              {
                title: 'Стрелка В.O.',
                amount: '133/217',
                image: require('@/assets/vo_route.jpg'),
              },
              {
                title: 'Петроградский',
                amount: '52/52',
                image: require('@/assets/vo_route.jpg'),
              },
              {
                title: 'Центральный',
                amount: '52/52',
                image: require('@/assets/vo_route.jpg'),
              },
            ]}
          />
        </Section>

        <Section openAll={true} to='PromocodesScreen' text='Промокоды'>
          <Promocodes data={promocodes}/>
        </Section>

        <Section openAll={true} to='RoutesScreen' text='Лучшие за месяц'>
          <UserCard />
        </Section>
        <View className='h-36' />
      </Layout>
      <Toasts />
    </ScrollView>
  );
};
