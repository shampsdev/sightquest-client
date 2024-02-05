import { Card } from '@/components/ui/card';
import { CustomText } from '@/components/ui/custom-text';
import { IPromocode } from '@/interfaces/IPromocode';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import { globalStyles } from '@/styles/global.style';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Promocode = (props: IPromocode) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const promoClickHandle = (promo: IPromocode) => {
    navigation.navigate('PromocodeScreen', { ...promo });
  };

  return (
    <TouchableOpacity onPress={() => promoClickHandle(props)}>
      <Card image={props.grayImage}>
        <View
          style={{
            ...globalStyles.border,
            position: 'absolute',
            paddingVertical: 6,
            bottom: 8,
            left: 8,
          }}
        >
          <CustomText>{props.title}</CustomText>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
