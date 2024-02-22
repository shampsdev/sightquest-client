import React from 'react';
import { View } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { Layout } from '@/components/layout';
import { CustomText } from '@/components/ui/custom-text';
import { globalStyles } from '@/styles/global.style';
import { CoinsIcon } from '@/assets/icons/coins.icon';
import { ScreenHeader } from '@/components/screen-header';
import PlusIcon from '@/assets/icons/plus.icon';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '@/modules/navigation/root-navigator';
import Edit2Icon from '@/assets/icons/edit2.icon';
import { borderRadius, colors } from '@/constants/colors';
import { CharacteristicBar } from '@/components/ui/characteristic-bar';
import SpeedIcon from '@/assets/icons/speed.icon';
import TimeIcon from '@/assets/icons/time.icon';
import { CircleImage } from '@/components/ui/circle-image';
import { useAuth } from '@/modules/auth/hooks/useAuth';

// const purchases = [4, 6];
const values = [1, 2, 3];

const lastPlayersText = `Последние
с кем играли`;

export const ProfileScreen = () => {
  // const [image, setImage] = useState<string>();
  // const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { user, manage } = useAuth();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      // setImage(result.assets[0].uri);
    }
  };

  return (
    <ScrollView
      style={{
        paddingTop: '13%',
        backgroundColor: colors.background,
      }}
    >
      <Layout>
        <ScreenHeader />
        <View
          style={{
            gap: 16,
          }}
        >
          <View
            style={{
              gap: 8,
              flexDirection: 'row',
            }}
          >
            <View
              style={[
                globalStyles.border,
                {
                  width: '66%',
                  gap: 16,
                },
              ]}
            >
              <View className='flex-row justify-between items-center'>
                <View>
                  <CustomText size='2xl'>{user?.username}</CustomText>
                  {/* <CustomText size='lg'>_victorgezz</CustomText> */}
                </View>

                <TouchableOpacity
                  onPress={() => {
                    pickImage();
                  }}
                >
                  <CircleImage
                    source={
                      user?.avatar ?? require('@/assets/default-avatar.jpg')
                    }
                  />
                </TouchableOpacity>
              </View>
              <Edit2Icon />
            </View>
            <View
              className='flex-1 relative'
              style={[
                globalStyles.border,
                {
                  backgroundColor: colors.secondary,
                },
              ]}
            >
              <View
                style={{
                  paddingTop: 8,
                  gap: 6,
                }}
                className='flex-row items-center'
              >
                <CustomText
                  styles={{
                    color: colors.primary,
                  }}
                  size='xl'
                >
                  290
                </CustomText>
                <CoinsIcon stroke={colors.primary} />
              </View>

              <CustomText
                styles={{
                  position: 'absolute',
                  bottom: 16,
                  left: 8,
                  color: colors.primary,
                }}
                size='lg'
              >
                Баланс
              </CustomText>
            </View>
          </View>

          <View
            style={{
              gap: 8,
              flexDirection: 'row-reverse',
            }}
          >
            <View
              style={[
                globalStyles.border,
                {
                  width: '66%',
                  gap: 16,
                  backgroundColor: colors.secondary,
                },
              ]}
            >
              <CustomText
                styles={{
                  color: colors.primary,
                }}
                size='lg'
              >
                {lastPlayersText}
              </CustomText>
              <View
                style={{
                  position: 'relative',
                }}
              >
                {values.map((_, index) => (
                  <CircleImage
                    key={index}
                    source={require('@/assets/default-avatar.jpg')}
                    styles={{
                      left: index * 48,
                      zIndex: values.length - index,
                      borderWidth: 2,
                      borderColor: colors.primary,
                      position: 'absolute',
                    }}
                  />
                ))}
              </View>
            </View>

            <View
              style={{
                flexGrow: 1,
                position: 'relative',
                borderRadius: borderRadius,
                backgroundColor: colors.primary,
              }}
            >
              <CustomText
                styles={{
                  textAlign: 'center',
                  marginVertical: 4,
                }}
                size='lg'
              >
                Друзья
              </CustomText>

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 120,
                  borderRadius: borderRadius,
                  marginHorizontal: 'auto',
                  backgroundColor: colors.secondary,
                }}
              >
                <PlusIcon className='m-auto' />
              </TouchableOpacity>
            </View>
          </View>

          {/* <View style={globalStyles.border}>
            <View className='flex-row items-center justify-between px-4'>
              <CustomText size='lg'>Ваши покупки</CustomText>
              <TouchableOpacity
                onPress={() => navigation.navigate('StoreScreen')}
              >
                <PlusIcon fill='black' />
              </TouchableOpacity>
            </View>

            {purchases.length === 0 ? (
              <CustomText
                styles={{
                  paddingHorizontal: 16,
                  paddingTop: 16,
                }}
              >
                У вас нет активных способностей
              </CustomText>
            ) : (
              purchases.map((_, indx) => (
                <View
                  key={indx}
                  className='my-2 w-full h-12 rounded-full flex-row justify-between pr-4 bg-secondary items-center'
                >
                  <View className='border-2 border-secondary bg-primary rounded-full h-full'>
                    <PlusIcon className='mx-[10px] my-auto' fill='black' />
                  </View>
                  <CustomText
                    styles={{
                      color: colors.primary,
                    }}
                  >
                    Невидимка
                  </CustomText>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 4,
                      alignItems: 'center',
                    }}
                  >
                    <CustomText
                      styles={{
                        color: colors.primary,
                      }}
                    >
                      310
                    </CustomText>
                    <CoinsIcon stroke={colors.primary} />
                  </View>
                </View>
              ))
            )}
          </View> */}

          <View
            style={[
              globalStyles.border,
              {
                marginTop: 0,
                gap: 16,
                paddingHorizontal: 16,
                backgroundColor: colors.secondary,
              },
            ]}
          >
            <CustomText
              styles={{
                paddingHorizontal: 16,
                color: colors.primary,
              }}
              size='lg'
            >
              Ваши показатели
            </CustomText>

            <CharacteristicBar
              styles={{
                width: '100%',
              }}
              amount={5}
              total={10}
              icon={<SpeedIcon />}
            />

            <CharacteristicBar
              styles={{
                width: '100%',
              }}
              amount={5}
              total={10}
              icon={<TimeIcon />}
            />

            <CharacteristicBar
              styles={{
                width: '100%',
              }}
              amount={1}
              total={10}
              icon={<CoinsIcon />}
            />
          </View>

          <View className='w-full flex items-center h-14'>
            <TouchableOpacity
              onPress={() => {
                manage.clear();
              }}
              style={[
                globalStyles.border,
                {
                  borderRadius: 24,
                  width: 140,
                  alignItems: 'center',
                },
              ]}
            >
              <CustomText styles={{ textAlign: 'center' }} size='lg'>
                Выйти
              </CustomText>
            </TouchableOpacity>
          </View>

          <View className='h-40' />
        </View>
      </Layout>
    </ScrollView>
  );
};
