import React, { useRef } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Button } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useNavigation } from '@react-navigation/native';

export const CameraModule = () => {
  const navigation = useNavigation();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera>(null);

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
    <>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={CameraType.back}
        autoFocus={true}
      ></Camera>
      <TouchableOpacity
        className='top-10 left-5 absolute opacity-50'
        onPress={() => {
          // @ts-ignore
          navigation.goBack();
        }}
      >
        <View className='bg-white p-5 rounded-full'>
          <Text>X</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className='bottom-20 mx-auto z-10 absolute flex w-full justify-center items-center'
        onPress={async () => {
          let data = await cameraRef.current?.takePictureAsync();
          console.log(data?.uri);
        }}
      >
        <View className='bg-white p-5 rounded-full'>
          <Text>Take pic</Text>
        </View>
      </TouchableOpacity>
    </>
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
