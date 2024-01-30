import React, { useRef, useState } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Button,
  Image,
} from 'react-native';
import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';
import { useMapStore } from '../map/store/useMapStore';
import { useSockets } from '../map/hooks/useSockets';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/root-navigator';

export const CameraModule = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera>(null);
  const [data, setData] = useState<CameraCapturedPicture>();

  const [setQuestPoint] = useMapStore((store) => [store.setSelectedQuestPoint]);

  const { updateQuestCompleted } = useSockets();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
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
        <>
          <Image source={{ uri: data.uri }} className='h-full w-full'></Image>
          <View className='bottom-20 mx-auto z-10 absolute flex w-full justify-center items-center flex-row gap-5'>
            <TouchableOpacity
              onPress={async () => {
                setQuestPoint(null);
                updateQuestCompleted(data.uri);
                navigation.goBack();
              }}
            >
              <View className='bg-white p-5 rounded-full w-20'>
                <Text className='text-center'>Use</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={async () => {
                setData(undefined);
              }}
            >
              <View className='bg-white p-5 rounded-full'>
                <Text>Retake</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Camera
            ref={cameraRef}
            style={styles.camera}
            type={CameraType.back}
            autoFocus={true}
          ></Camera>
          <TouchableOpacity
            className='top-10 left-5 absolute'
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View className='p-5 rounded-full'>
              <Text className='text-white font-bold text-xl'>X</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className='bottom-20 mx-auto z-10 absolute flex w-full justify-center items-center'
            onPress={async () => {
              setData(await cameraRef.current?.takePictureAsync());
              // navigation.goBack();
            }}
          >
            <View className='bg-white p-5 rounded-full'>
              <Text>Take Pic</Text>
            </View>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
});
