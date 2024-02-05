import React, { useMemo, useRef, RefObject, useCallback } from 'react';
import { View, Text } from 'react-native';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import MapView from 'react-native-maps';
import { IQuestPoint } from '@/interfaces/IQuestPoint';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { colors } from '@/constants/colors';
import { useUserInterface } from '../hooks/useUserInterface';

interface IGameBottomDrawer {
  mapRef: RefObject<MapView>;
  questPoints: IQuestPoint[];
}

export const GameBottomDrawer = ({
  mapRef,
  questPoints,
}: IGameBottomDrawer) => {
  const { setTracking } = useUserInterface();

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['15%', '45%'], []);

  // use callback
  const renderItem = useCallback(
    ({ item, index }: { item: IQuestPoint; index: number }) => {
      return (
        <TouchableWithoutFeedback
          key={index}
          className='bg-white h-24 rounded-3xl flex flex-row items-center px-2 justify-between my-1 mx-4'
          onPress={() => {
            setTracking(false);
            mapRef.current?.animateToRegion({
              ...item.location,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            });
            bottomSheetRef.current?.collapse();
          }}
        >
          {index % 2 == 0 ? (
            <>
              <Text className='text-xl'>{item.title}</Text>
              <View className='h-2 w-2 bg-slate-300 rounded-full' />
              <View className='h-2 w-2 bg-slate-300 rounded-full' />
              <View className='h-2 w-2 bg-slate-300 rounded-full' />
              <View className='h-20 w-20 bg-slate-300 rounded-3xl flex justify-center items-center'>
                <Text className='text-2xl'>25</Text>
                <Text>(мин)</Text>
              </View>
            </>
          ) : (
            <>
              <View className='h-20 w-20 bg-slate-300 rounded-3xl flex justify-center items-center'>
                <Text className='text-2xl'>25</Text>
                <Text>(мин)</Text>
              </View>
              <View className='h-2 w-2 bg-slate-300 rounded-full' />
              <View className='h-2 w-2 bg-slate-300 rounded-full' />
              <View className='h-2 w-2 bg-slate-300 rounded-full' />
              <Text className='text-xl'>{item.title}</Text>
            </>
          )}
        </TouchableWithoutFeedback>
      );
    },
    []
  );

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={{
        backgroundColor: colors.background,
      }}
    >
      <BottomSheetFlatList data={questPoints} renderItem={renderItem} />
    </BottomSheet>
  );
};
