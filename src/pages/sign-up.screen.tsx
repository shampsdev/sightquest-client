import { Border } from '@/components/border'
import { CustomButton } from '@/components/ui/custom-button'
import { CustomText } from '@/components/ui/custom-text'
import { colors } from '@/constants/colors'
import { AuthStackParamList } from '@/modules/navigation/auth-navigator'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import CheckBox from 'expo-checkbox'
import { useAuth } from '@/modules/auth/hooks/useAuth'
import { useSignUp } from '@/modules/auth/hooks/useSignUp'
import { ToastPosition, Toasts, toast } from '@backpackapp-io/react-native-toast'

export const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);

  const { manage } = useAuth();
  
  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const login = () => {
    navigation.navigate('AuthScreen');
  }

  const signUp = async () => {
    const response = await useSignUp(username, password);

    if (response === "successful") {
      toast(`error ${response}`, {
        duration: 4000,
        position: ToastPosition.TOP,
        icon: '⚠️',
        styles: {
          view: styles.toaster,
        },
      });
    }
    
    manage.login(username);
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
          Регистрация
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
      <Toasts/>
    </View>
  )
}

const styles = StyleSheet.create({
  toaster: {
    backgroundColor: colors.secondary,
    color: colors.primary
  }
})