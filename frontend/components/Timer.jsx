import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View>
      <Text className='font-urbanistBold text-2xl pt-4'>{formatTime(time)}</Text>
    </View>
  );
};

export default Timer;