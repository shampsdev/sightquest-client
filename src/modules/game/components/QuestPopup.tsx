import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useMapStore } from '../store/useMapStore';
import { useNavigation } from '@react-navigation/native';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/modules/navigation/root-navigator';

interface IPopupProps {
  questPoint: IQuestPoint;
}

export const QuestPopup = ({ questPoint }: IPopupProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const setQuestPoint = useMapStore((store) => store.setSelectedQuestPoint);

  return (
    <Animated.View
      entering={ZoomIn.delay(200).duration(200).springify()}
      className='absolute w-full h-full'
    >
      <View className='bg-[#CACACA] rounded-3xl overflow-hidden mt-52 mx-5'>
        <View className='p-5 space-y-5 flex justify-between'>
          <Text className='font-bold text-2xl text-center'>
            {questPoint.title}
          </Text>
          <Text className='font-muted opacity-50 mx-auto w-2/3 text-center'>
            {questPoint.description}
          </Text>
          <Image
            className='w-full h-28 rounded-3xl'
            source={{ uri: questPoint.photo }}
          />
          <View className='flex flex-row justify-around'>
            <TouchableOpacity
              className='p-4 bg-[#EAEAEA] rounded-full'
              onPress={() => {
                setQuestPoint(null);
              }}
            >
              <Text className='text-lg text-center'>Отмена</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className='p-4 bg-white rounded-full'
              onPress={() => {
                navigation.navigate('Camera');
              }}
            >
              <Text className='text-lg text-center'>Погнали!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};
