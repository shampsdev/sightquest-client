import { Layout } from '@/components/layout';
import { CustomText } from '@/components/ui/custom-text';
import SwipeButton from '@/components/ui/swipe-button';
import { colors } from '@/constants/colors';
import React from 'react';
import { View, Image } from 'react-native';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import { AuthStackParamList } from '@/modules/navigation/auth-navigator';

export const LoadScreen = () => {
  const { user } = useAuth();
  const navigation =
    useNavigation<
      StackNavigationProp<RootStackParamList & AuthStackParamList>
    >();

  const handleToggle = () => {
    if (user != null) {
      navigation.navigate('HomeScreen');
    } else {
      navigation.navigate('AuthScreen');
    }
  };

  return (
    <View className='pt-[45%] h-full bg-background'>
      <Layout
        styles={{
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80%',
        }}
      >
        <Image source={require('@/assets/victor-mascot.png')} />
        <CustomText
          styles={{
            marginHorizontal: 'auto',
            textAlign: 'center',
            width: '80%',
          }}
        >
          Игра, в которой бегун выполняет задания на точках активности, пока за
          ним гонятся ловцы.
        </CustomText>
      </Layout>
      <SwipeButton
        additionStyles={{
          position: 'absolute',
          bottom: 20,
          alignSelf: 'center',
          backgroundColor: colors.detail,
        }}
        onToggle={handleToggle}
      />
    </View>
  );
};
