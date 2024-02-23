import { Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, { ZoomIn } from 'react-native-reanimated';
import { CustomText } from '@/components/ui/custom-text';
import { useUserInterface } from '../../hooks/useUserInterface';
import { useRef, useState } from 'react';
import { useGame } from '../../hooks/useGame';

export const CatchPopup = () => {
  const { setCatchPopup } = useUserInterface();
  const [code, setCode] = useState([...Array(6)].map(() => ''));
  const inputs = useRef<(TextInput | null)[]>([]);

  const { game } = useGame();

  const onSubmit = (code: string) => {
    game.catchPlayer(code);
    setCatchPopup(false);
  };

  return (
    <Animated.View
      entering={ZoomIn.delay(200).duration(200).springify()}
      className='absolute w-full h-full'
    >
      <View className='bg-[#CACACA] rounded-3xl overflow-hidden mt-60 mx-5'>
        <View className='p-5 space-y-5 flex justify-between'>
          <Text className='text-2xl text-center opacity-50'>Введи код!</Text>
          <View className='font-muted opacity-50 mx-auto w-3/4 text-center text-lg'>
            <CustomText
              size='lg'
              styles={{
                textAlign: 'center',
              }}
            >
              Подойди к бегуну и введи секретный код!
            </CustomText>
          </View>
          <View className='flex flex-row justify-center gap-x-3'>
            {code.map((_, idx) => {
              return (
                <TextInput
                  autoFocus={!code[0].length && idx === 0}
                  key={idx}
                  maxLength={1}
                  onKeyPress={(e) => {
                    if (
                      e.nativeEvent.key === 'Backspace' &&
                      !code[idx] &&
                      idx !== 0
                    ) {
                      const newCode = [...code];
                      newCode[idx - 1] = '';
                      setCode(newCode);
                      inputs.current[idx - 1]?.focus();
                    }
                  }}
                  onChangeText={(input: string) => {
                    const num = input;
                    const newCode = [...code];
                    newCode[idx] = num;
                    setCode(newCode);
                    if (idx !== 6 - 1 && input != '') {
                      inputs.current[idx + 1]?.focus();
                    }
                    if (newCode.every((num) => num !== '')) {
                      onSubmit(newCode.join(''));
                    }
                  }}
                  className='px-5 h-12 w-12 bg-white rounded-md text-md'
                  ref={(ref) => inputs.current.push(ref)}
                />
              );
            })}
          </View>
          <View className='flex flex-row justify-around'>
            <TouchableOpacity
              className='p-4 bg-white rounded-full justify-center items-center'
              onPress={() => {
                setCatchPopup(false);
              }}
            >
              <Text className='text-xl text-center px-10'>отменить</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};
