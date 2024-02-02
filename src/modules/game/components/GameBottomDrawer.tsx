import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export const GameBottomDrawer = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['15%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={{
        backgroundColor: '#E5E5E5',
      }}
    >
      <View className='flex px-5 pt-2 gap-y-3'>
        <View className='w-full bg-white h-24 rounded-3xl flex flex-row items-center px-2 justify-between'>
          <Text className='text-2xl'>Стрелка В.О</Text>
          <View className='h-2 w-2 bg-slate-300 rounded-full' />
          <View className='h-2 w-2 bg-slate-300 rounded-full' />
          <View className='h-2 w-2 bg-slate-300 rounded-full' />
          <View className='h-20 w-20 bg-slate-300 rounded-3xl flex justify-center items-center'>
            <Text className='text-3xl'>25</Text>
            <Text>(мин)</Text>
          </View>
        </View>
        <View className='w-full bg-white h-24 rounded-3xl flex flex-row items-center px-2 justify-between'>
          <View className='h-20 w-20 bg-slate-300 rounded-3xl flex justify-center items-center'>
            <Text className='text-3xl'>25</Text>
            <Text>(мин)</Text>
          </View>
          <View className='h-2 w-2 bg-slate-300 rounded-full' />
          <View className='h-2 w-2 bg-slate-300 rounded-full' />
          <View className='h-2 w-2 bg-slate-300 rounded-full' />
          <Text className='text-2xl'>Стрелка В.О</Text>
        </View>
        <View className='w-full bg-white h-24 rounded-3xl flex flex-row items-center px-2 justify-between'>
          <Text className='text-2xl'>Стрелка В.О</Text>
          <View className='h-2 w-2 bg-slate-300 rounded-full' />
          <View className='h-2 w-2 bg-slate-300 rounded-full' />
          <View className='h-2 w-2 bg-slate-300 rounded-full' />
          <View className='h-20 w-20 bg-slate-300 rounded-3xl flex justify-center items-center'>
            <Text className='text-3xl'>25</Text>
            <Text>(мин)</Text>
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};
