import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMapStore } from '../../store/useMapStore';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { ITaskCompleted } from '@/interfaces/IEvent';

interface IPopupProps {
  taskCompleted: ITaskCompleted;
}

export const EventPopup = ({ taskCompleted }: IPopupProps) => {
  const [setUpdatePopup] = useMapStore((store) => [store.setUpdatePopup]);

  return (
    <Animated.View
      entering={ZoomIn.delay(200).duration(200).springify()}
      className='absolute w-full h-full z-20'
    >
      <View className='bg-[#CACACA] rounded-3xl overflow-hidden mt-44 mx-5'>
        <View className='p-5 space-y-5 flex justify-between'>
          <Image
            className='w-full h-96 rounded-3xl'
            source={{ uri: taskCompleted.photo }}
          />
          <View className='flex-row justify-center'>
            <Text className='font-bold text-2xl text-center'>
              {`${taskCompleted.user.username} `}
            </Text>
            <Text className='text-2xl text-center'>выполнил задание!</Text>
          </View>
          {/* <Text className='font-muted opacity-50 mx-auto w-2/3 text-center'>
            {taskCompleted.task_id}
          </Text> */}
          <View className='flex flex-row justify-around'>
            <TouchableOpacity
              className='p-4 bg-[#EAEAEA] rounded-full'
              onPress={() => {
                setUpdatePopup(null);
              }}
            >
              <Text className='text-lg text-center'>Хорошо!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};
