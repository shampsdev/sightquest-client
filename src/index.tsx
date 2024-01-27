import { View } from 'react-native';
import { Map } from '@/modules/map';
import { Navigation } from './modules/navigation';

export const Main = () => {
  return (
    <View className='h-full w-full'>
      <Map></Map>
      <Navigation />
    </View>
  );
};
