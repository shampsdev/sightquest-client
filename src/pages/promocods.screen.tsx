import { Border } from '@/components/border'
import { Layout } from '@/components/layout'
import { ScreenHeaderBack } from '@/components/screen-header-back'
import { CustomText } from '@/components/ui/custom-text'
import { borderRadius, colors } from '@/constants/colors'
import React from 'react'
import { ScrollView, View, Image, ImageSourcePropType } from 'react-native'

export type PromocodProps = {
  title: string;
  image: ImageSourcePropType;
  promo: string;
}

const data: PromocodProps[] = [
  {
    title: 'Jack&Chan',
    image: require('@/assets/promo_1.jpg'),
    promo: '#d9ne',
  },
  {
    title: 'Flow',
    image: require('@/assets/promo_2.jpg'),
    promo: "#vas3k",
  },
  {
    title: 'Bonch',
    image: require('@/assets/promo_3.jpg'),
    promo: "#nebo1",
  }
];

export const PromocodsScreen = () => {
  return (
    <View className='min-h-full bg-background'>
      <ScrollView 
        className='pt-[13%]'
      >
        <ScreenHeaderBack/>

        <Layout 
          styles={{
            gap: 16
          }}
        >
          { data.map((value, index) => (
            <Border styles={{
              width: '100%',
              backgroundColor: colors.secondary,
              flexDirection: 'row',
              gap: 16,
            }} key={index}>
              <Image
                borderRadius={borderRadius}
                className='h-28 w-40'
                source={require('@/assets/promo_1.jpg')}
              />
              <View className='flex-1 relative'>
                <CustomText styles={{
                  textAlign: 'center',
                  color: colors.primary
                }} size='lg'>{value.title}</CustomText>

              <CustomText styles={{
                textAlign: 'center',
                color: colors.primary,
                position: 'absolute',
                alignSelf: 'center',
                bottom: 0,
              }} size='lg'>{value.promo}</CustomText>
              </View>
            </Border>
          )) }
        </Layout>
      </ScrollView>
    </View>
  )
}
