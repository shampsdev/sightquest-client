import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMapStore } from '../store/useMapStore';
import { useNavigation } from '@react-navigation/native';
import Animated, { ZoomIn } from 'react-native-reanimated';

interface IPopupProps {
  questPoint: IQuestPoint;
}

export const QuestPopup = ({ questPoint }: IPopupProps) => {
  const navigation = useNavigation();
  const setQuestPoint = useMapStore((store) => store.setSelectedQuestPoint);

  var random = Math.round(Math.random());

  return (
    <Animated.View
      entering={ZoomIn.delay(200).duration(200).springify()}
      className='absolute w-full h-full'
    >
      <View
        className={`bg-white rounded-2xl overflow-hidden mt-28 mx-5 ${
          random ? 'rotate-1' : '-rotate-1'
        }`}
      >
        <View className='absolute z-10 right-0'>
          <TouchableOpacity
            className='p-5'
            onPress={() => {
              setQuestPoint(null);
            }}
          >
            <Text className='w-fit text-white'>X</Text>
          </TouchableOpacity>
        </View>
        <Image className='w-full h-60' source={{ uri: questPoint.photo }} />
        <View className='p-5 space-y-5 flex justify-between'>
          <Text className='font-bold text-2xl'>{questPoint.title}</Text>
          <Text className='font-muted opacity-50'>
            {questPoint.description}
          </Text>
          <TouchableOpacity
            className='p-8'
            onPress={() => {
              // @ts-ignore да, но что поделаешь
              navigation.navigate('Camera');
            }}
          >
            <Text className='font-bold text-2xl text-center'>Готово!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};
