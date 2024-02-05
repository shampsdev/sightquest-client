import { CustomText } from '@/components/ui/custom-text';
import { useAuth } from '@/modules/auth/hooks/useAuth';
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { colors } from '@/constants/colors';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import { useNavigation } from '@react-navigation/native';
import { Border } from '@/components/border';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '@/modules/navigation/auth-navigator';
import { CustomButton } from '@/components/ui/custom-button';
import CheckBox from 'expo-checkbox'

export const AuthScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();
  const { manage } = useAuth();
    
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const login = () => {
    manage.login(username, password);
  }

  const signUp = () => {
    navigation.navigate('SignUpScreen');
  }

  return (
    <View
      style={{ 
        flexGrow: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center'
       }}
    >
      <Border
        styles={{
          backgroundColor: colors.secondary,
          gap: 16,
          paddingHorizontal: 32,
          paddingVertical: 20,
        }}
      >
        <CustomText size='xl' styles={{ color: colors.primary, textAlign: 'center' }}>
          Войти
        </CustomText>

        <CustomText styles={{ color: colors.primary, textAlign: 'center' }}>
          Заполните поля
        </CustomText>

        <TextInput
          autoCapitalize='none'
          style={{
            padding: 10,
            backgroundColor: colors.whiteDark,
            borderRadius: 20,
          }}
          value={username}
          onChangeText={(string) => {
            setUsername(string);
          }}
          placeholder='nickname..'
        />
        <TextInput
          autoCapitalize='none'
          style={{
            padding: 10,
            backgroundColor: colors.whiteDark,
            borderRadius: 20,
          }}
          secureTextEntry={!isChecked}
          value={password}
          onChangeText={(string) => {
            setPassword(string);
          }}
          placeholder='password..'
        />

        <View style={{
          flexDirection: 'row',
          gap: 12,
        }}>
          <CheckBox
            value={isChecked} 
            onValueChange={setChecked}
            color={isChecked ? colors.darkPrimary : undefined}
          />
          <CustomText styles={{
            color: colors.primary
          }}>Показывать пароль</CustomText>
        </View>

        <View 
          style={{
            flexDirection: 'row',
            gap: 12,
          }}
        >
          <CustomButton
            onPress={login}
          >
            Login
          </CustomButton>

          <CustomButton
            onPress={signUp}
          >
            Sign up
          </CustomButton>
        </View>

      </Border>
    </View>
  );
};
