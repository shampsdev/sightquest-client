import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { CustomText } from '@/components/ui/custom-text';

interface ITimerProps {
  until: number;
}

export const Timer = ({ until }: ITimerProps) => {
  // let leftSeconds = Math.floor(timeLeftMs / 1000);
  // const leftHours = Math.floor(leftSeconds / 3600);
  // leftSeconds -= leftHours * 3600;
  // const leftMinutes = Math.floor(leftSeconds / 60);
  // leftSeconds -= leftMinutes * 60;

  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTime = (deadline: number) => {
    const msLeft = deadline - Date.now();

    const hours = Math.floor((msLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((msLeft / 1000 / 60) % 60);
    const seconds = Math.floor((msLeft / 1000) % 60);

    setTime({
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(until), 1000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   if (time.minutes > 0 || time.seconds > 0 || time.hours > 0) {
  //     const interval = setInterval(
  //       () => [
  //         setTime({
  //           hours: time.hours,
  //           minutes: time.minutes,
  //           seconds: time.seconds - 1,
  //         }),
  //       ],
  //       1000
  //     );
  //     if (time.seconds == 0 && time.minutes > 0) {
  //       setTime({
  //         hours: time.hours,
  //         minutes: time.minutes - 1,
  //         seconds: 59,
  //       });
  //     }
  //     if (time.seconds == 0 && time.minutes == 0 && time.hours > 0) {
  //       setTime({
  //         hours: time.hours - 1,
  //         minutes: 59,
  //         seconds: 59,
  //       });
  //     }
  //     return () => clearInterval(interval);
  //   }
  // }, [time]);

  return (
    <View className='h-20 flex-row'>
      <View className='absolute h-20 bg-[#E5E5E5] w-68 rounded-2xl flex justify-center items-center px-8'>
        <CustomText size='3xl'>
          {`${time.hours.toString().padStart(2, '0')}:  ${time.minutes
            .toString()
            .padStart(2, '0')}:  ${time.seconds.toString().padStart(2, '0')}`}
        </CustomText>
      </View>
    </View>
  );
};