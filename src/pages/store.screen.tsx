import { Layout } from '@/components/layout';
import { ScreenHeader } from '@/components/screen-header';
import { CustomText } from '@/components/ui/custom-text';
import { colors } from '@/constants/colors';
import { Header } from '@/modules/store-sections/header';
import React from 'react';
import { View } from 'react-native';

export const StoreScreen = () => {
  return (
    <View className='pt-[13%] bg-background h-full'>
      <Layout>
        <ScreenHeader />
        <Header />
        <View className='h-3/4 flex justify-center'>
          <CustomText
            size='2xl'
            styles={{
              paddingTop: 16,
              textAlign: 'center',
              color: colors.primary,
            }}
          >
            Скоро появится...
          </CustomText>
        </View>
        {/* <Store/> */}
      </Layout>
    </View>
  );
};
