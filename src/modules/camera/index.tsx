import React, { useRef, useState } from 'react';
import { TouchableOpacity, View, Text, Button, Image } from 'react-native';
import {
  Camera,
  CameraCapturedPicture,
  CameraType,
  FlashMode,
} from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/root-navigator';
import { CustomText } from '@/components/ui/custom-text';
import { FlashIcon } from '@/assets/icons/flash.icon';
import { PhotoButtonIcon } from '@/assets/icons/photo-button.icon';
import { BackArrowIcon } from '@/assets/icons/back-arrow.icon';
import { TickIcon } from '@/assets/icons/tick.icon';
import { useGame } from '../game/hooks/useGame';

export const CameraModule = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera>(null);
  const [data, setData] = useState<CameraCapturedPicture>();
  const [flashMode, setFlashMode] = useState<FlashMode>(FlashMode.auto);

  const { game } = useGame();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View className='flex justify-center items-center h-full w-full'>
        <Text style={{ textAlign: 'center' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title='grant permission' />
      </View>
    );
  }

  return (
    <View className='w-full h-full'>
      {data ? (
        <Image src={data.uri} className='h-full w-full'></Image>
      ) : (
        <Camera
          flashMode={flashMode}
          ref={cameraRef}
          style={{
            flex: 1,
          }}
          type={CameraType.back}
          autoFocus={true}
        />
      )}
      <View className='absolute pt-10 h-32 w-full bg-[#EAEAEA] rounded-b-3xl top-0 flex justify-center items-center'>
        <CustomText size='xl'>Сделай фото</CustomText>
      </View>
      {data && (
        <TouchableOpacity
          onPress={async () => {
            await game.completeQuest(data);
            navigation.goBack();
          }}
          className='h-20 w-20 bg-[#EAEAEA] rounded-3xl absolute bottom-32 right-0 z-20 m-5 flex justify-center items-center'
        >
          <TickIcon />
        </TouchableOpacity>
      )}
      <View className='absolute h-32 w-full bg-[#EAEAEA] rounded-t-3xl bottom-0 items-center flex-row'>
        <View className='w-3/4 flex flex-row mx-auto items-center'>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <BackArrowIcon />
          </TouchableOpacity>
          <TouchableOpacity
            className='mx-auto z-10 flex'
            onPress={async () => {
              setData(await cameraRef.current?.takePictureAsync());
            }}
          >
            <PhotoButtonIcon />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setFlashMode(
                flashMode == FlashMode.on ? FlashMode.off : FlashMode.on
              );
            }}
          >
            <FlashIcon fill={flashMode == FlashMode.on ? 'black' : 'none'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
