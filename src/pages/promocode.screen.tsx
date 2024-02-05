import { Layout } from '@/components/layout';
import { ScreenHeaderBack } from '@/components/screen-header-back';
import { CustomText } from '@/components/ui/custom-text';
import React from 'react';
import { Image, View } from 'react-native';
import { Border } from '@/components/border';
import { ScrollView } from 'react-native-gesture-handler';
import { borderRadius } from '@/constants/colors';
import { IPromocode } from '@/interfaces/IPromocode';

export const PromocodeScreen = ({ route }) => {
  const { params }: IPromocode = route;

  return (
    <ScrollView className='min-h-full pt-[13%] bg-background'>
      <ScreenHeaderBack />
      <Layout
        styles={{
          alignSelf: 'center',
          gap: 24,
        }}
      >
        <View>
          <CustomText size='3xl'>{params.title}</CustomText>
          <CustomText size='xl'>{params.kitchen}</CustomText>
        </View>
        <Image
          className='w-full'
          borderRadius={borderRadius}
          source={params.image}
        />
        <CustomText
          styles={{
            fontSize: 14,
          }}
        >
          {params.description}
        </CustomText>
        <CustomText size='lg'>{params.address}</CustomText>
        <Border
          styles={{
            alignSelf: 'flex-start',
          }}
        >
          <CustomText size='xl'>{params.promo}</CustomText>
        </Border>
      </Layout>
    </ScrollView>
  );
};
