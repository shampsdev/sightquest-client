import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PeterPaul } from '@/assets/peterpaul';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/modules/navigation/root-navigator';
import Animated from 'react-native-reanimated';
import { useAuth } from '@/modules/auth/hooks/useAuth';

export const HomeScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const { manage } = useAuth();
  manage.login();

  return (
    <View className=''>
      <View className='items-center relative'>
        <View className='h-[80vh] w-full pt-20 px-5 space-y-5 flex flex-col justify-center'>
          <Animated.View className='h-72 rounded-3xl bg-slate-400 p-5 flex flex-col overflow-hidden justify-between'>
            <PeterPaul className='absolute bottom-4 -left-20 fill-secondary' />
            <Text className='text-white font-bold text-4xl text-right'>
              Санкт-Петербург
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('LobbyScreen');
              }}
            >
              <Text className='text-white font-bold text-3xl text-right'>
                {'—>'}
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>
    </View>
  );
};
