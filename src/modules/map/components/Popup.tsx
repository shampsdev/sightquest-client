import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Popup = () => {
  return (
    <View className='absolute left-5 top-20 right-5 bottom-48 bg-white rounded-2xl overflow-hidden'>
      <Image className='w-full h-60' source={require('@/assets/image2.jpg')} />
      <View className='p-5 space-y-5 flex justify-between h-3/5'>
        <Text className='font-bold text-2xl'>Spas na krovi epta</Text>
        <Text className='font-muted opacity-50'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta qui,
          doloribus sapiente officiis est hic dignissimos ut culpa eius dicta.
        </Text>
        <TouchableOpacity className='p-8'>
          <Text className='font-bold text-2xl text-center'>Photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
