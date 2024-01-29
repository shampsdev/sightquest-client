import { Text } from 'react-native';
import { useState, useEffect } from 'react';

export const Timer = () => {
  const [time, setTime] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    console.log(time);
    if (time.minutes > 0 || time.seconds > 0) {
      const interval = setInterval(
        () => [
          setTime({
            hours: time.hours,
            minutes: time.minutes,
            seconds: time.seconds - 1,
          }),
        ],
        1000
      );
      if (time.seconds == 0 && time.minutes > 0) {
        setTime({
          hours: time.hours,
          minutes: time.minutes - 1,
          seconds: 59,
        });
      }
      if (time.seconds == 0 && time.minutes == 0 && time.hours > 0) {
        setTime({
          hours: time.hours - 1,
          minutes: 59,
          seconds: 59,
        });
      }
      return () => clearInterval(interval);
    }
  }, [time]);

  return (
    <Text className='text-white font-extrabold text-3xl text-center'>
      {time.hours == 0
        ? time.minutes.toString().padStart(2, '0') +
          ':' +
          time.seconds.toString().padStart(2, '0')
        : time.hours.toString().padStart(2, '0') +
          ':' +
          time.minutes.toString().padStart(2, '0')}
    </Text>
  );
};
