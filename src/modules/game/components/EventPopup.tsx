import { View, TouchableOpacity, Text, Image } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { useMapStore } from '../store/useMapStore';
import { IQuestCompleted } from '@/interfaces/IEvent';

interface IPopupProps {
  questCompleted: IQuestCompleted;
}

export const EventPopup = ({ questCompleted }: IPopupProps) => {
  const [setUpdatePopup] = useMapStore((store) => [store.setUpdatePopup]);

  return (
    <Animated.View
      entering={ZoomIn.delay(200).duration(200).springify()}
      className='absolute w-full h-full flex justify-center'
    >
      <View className='h-4/6 rounded-xl m-12 border-8 border-white bg-white'>
        <Image
          className='h-full w-full overflow-hidden rounded-lg'
          source={{
            uri: questCompleted.photo,
          }}
        />
        <View className='absolute bg-white w-70 -bottom-10 rotate-6 scale-125 p-5 rounded-lg'>
          <Text className='font-bold'>
            {questCompleted.user.username} выполнил задание!
          </Text>
          <Text className='text-[10px]'>Собрал все пышки города.</Text>
          <TouchableOpacity
            className='pt-2'
            onPress={() => {
              setUpdatePopup(null);
            }}
          >
            <Text className='font-bold text-xl text-center'>ok!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};
