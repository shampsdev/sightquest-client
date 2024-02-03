import { CustomText } from '@/components/ui/custom-text';
import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { Image, Text, View } from 'react-native';
import { Marker } from 'react-native-maps';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';

interface ICustomMarkerProps {
  point: IQuestPoint;
  extended: boolean | (() => boolean);
  distance: number;
  onPress: () => void;
}

export const CustomMarker = ({
  point,
  extended,
  distance,
  onPress,
}: ICustomMarkerProps) => {
  return (
    <Marker
      onPress={onPress}
      coordinate={point.location}
      className='flex justify-center items-center'
    >
      <View className='flex'>
        <Image
          className='w-16 h-16 rounded-full m-2 border-4 z-20'
          // это плохо, но это тут так как nativewind кидает ошибку если сделать border-white
          style={{
            borderColor: 'white',
          }}
          source={{ uri: point.photo }}
        />
        {extended && (
          <Animated.View
            entering={FadeInUp}
            exiting={FadeOutUp}
            className='h-34 w-56 bg-white py-2 px-3 rounded-3xl -left-2 bottom-11 z-10 absolute'
          >
            <View className='flex flex-row items-center justify-between pb-1'>
              <CustomText size='lg'>{point.title}</CustomText>
              <CustomText size='xs'>
                {`(${(distance / 1000).toFixed(2)}km)`}
              </CustomText>
            </View>
            <Text className='text-xs text-slate-700 pb-5'>
              {point.description}
            </Text>
          </Animated.View>
        )}
      </View>
    </Marker>
  );
};
