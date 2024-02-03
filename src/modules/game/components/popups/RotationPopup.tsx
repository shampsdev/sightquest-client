import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { CustomText } from '@/components/ui/custom-text';
import { useUserInterface } from '../../hooks/useUserInterface';

export const RotationPopup = () => {
  const { setRotationPopup } = useUserInterface();

  return (
    <Animated.View
      entering={ZoomIn.delay(200).duration(200).springify()}
      className='absolute w-full h-full'
    >
      <View className='bg-[#CACACA] rounded-3xl overflow-hidden mt-60 mx-5'>
        <View className='p-5 space-y-5 flex justify-between'>
          <Text className='text-2xl text-center opacity-50'>Ротация</Text>
          <View className='font-muted opacity-50 mx-auto w-3/4 text-center text-lg'>
            <CustomText
              size='lg'
              styles={{
                textAlign: 'center',
              }}
            >
              Во время ротации происходит обмен ролями. Тот, кто был бегуном,
              становится ловцом, а один из ловцов — бегуном.
            </CustomText>
          </View>
          <View className='flex flex-row justify-center'>
            <View className='h-20 w-20 bg-white rounded-full'></View>
            <View className='h-20 w-20 bg-white rounded-full'></View>
            <View className='h-20 w-20 bg-white rounded-full'></View>
          </View>
          <View className='flex flex-row justify-around'>
            <TouchableOpacity
              className='p-4 bg-white rounded-full'
              onPress={() => {
                setRotationPopup(false);
              }}
            >
              <Text className='text-xl text-center px-10'>Понятно!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};
