import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import React, { useCallback } from 'react';
import LeftArrowIcon from '@/assets/icons/left-arrow.icon';
import { ScreenHeader } from '@/components/screen-header';
import { Layout } from '@/components/layout';
import { CustomText } from '@/components/ui/custom-text';
import { Story } from '@/modules/stories/story';
import { Border } from '@/components/border';
import { Section } from '@/components/section';
import GroupIcon from '@/assets/icons/group.icon';
import { UserCard } from '@/modules/user-card/user-card';
import Animated from 'react-native-reanimated';
import { PanGestureHandler, TextInput } from 'react-native-gesture-handler';
import { Stories } from '@/modules/stories/stories';
import InstaStory from 'react-native-insta-story';
import { CityCards } from '@/modules/city-cards/city-cards';
import { BestRoutes } from '@/modules/best-routes/best-routes';
import { CreateRoom } from '@/modules/home-sections/create-room';
import { Toasts } from '@backpackapp-io/react-native-toast';

const data = [
  {
    user_id: 1,
    user_image:
      'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
    user_name: 'Ahmet Çağlar Durmuş',
    stories: [
      {
        story_id: 1,
        story_image:
          'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
        swipeText: 'Custom swipe text for this story',
        onPress: () => console.log('story 1 swiped'),
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
    user_name: 'Test User',
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
    <ScrollView className='pt-10'>
      <Layout styles={{
        gap: 16,
      }}>
        <ScreenHeader/>

        <Border>
          <CustomText size='2xl'>
            Привет, Виктор!
          </CustomText>
          <CustomText size='lg'>
            Готов играть в догонялки?
          </CustomText>
        </Border>
        
        <InstaStory 
          data={data}
          duration={5}
        />

        <CreateRoom/>

        <Section text='Узнать больше'>
          <CityCards data={[{
            'cityTitle': 'Санкт-Петербург',
            'amount': '132',
          },
          {
            'cityTitle': 'Москва',
            'amount': '182',
          }
          ]}/>
        </Section>
        <Section text='Топ маршрутов'>
          <BestRoutes 
            data={[
              {
                title: 'XXI',
                amount: '133/217'
              },
              {
                title: 'XX',
                amount: '52/52'
              },
            ]}
          />
        </Section>
        <Section text='Промокоды'>
          <View/>
        </Section>
        <Section text='Лучшие за месяц'>
          <UserCard/>
        </Section>
        <View className='h-36'/>
      </Layout>
      <Toasts />
    </ScrollView>
  );
};
