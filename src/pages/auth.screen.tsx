import { CustomText } from '@/components/ui/custom-text';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '@/constants/colors';

export const AuthScreen = () => {
  const { manage } = useAuth();
  const [username, setUsername] = useState('');

  return (
    <View
      className='flex h-full w-full justify-center items-center'
      style={{ backgroundColor: colors.background }}
    >
      <View
        style={{
          backgroundColor: colors.secondary,
          padding: 20,
          borderRadius: 20,
          gap: 15,
          width: '50%',
        }}
      >
        <CustomText styles={{ color: colors.primary, textAlign: 'center' }}>
          Введите ваш никнейм
        </CustomText>
        <TextInput
          autoCapitalize='none'
          style={{
            padding: 10,
            backgroundColor: colors.whiteDark,
            borderRadius: 20,
          }}
          onChangeText={(string) => {
            setUsername(string);
          }}
          placeholder='nickname..'
        />
        <TouchableOpacity
          onPress={() => {
            manage.login(username);
          }}
          style={{
            padding: 10,
            paddingHorizontal: 30,
            borderRadius: 25,
            backgroundColor: colors.primary,
          }}
        >
          <CustomText styles={{ textAlign: 'center' }}>Login</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};
