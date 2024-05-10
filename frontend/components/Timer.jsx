import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Timer = () => {
    const [currentTime, setCurrentTime] = useState(new Date().setHours(0, 0, 0, 0)); // Start time initialized to 00:00:00

    useEffect(() => {
        const timerID = setInterval(() => {
            setCurrentTime(prevTime => new Date(prevTime.getTime() + 1000)); // Increment current time by 1 second
        }, 1000);
        return () => clearInterval(timerID);
    }, []);

    const formattedTime = () => {
        const date = new Date(currentTime);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

    return (
        <View>
            <Text className='font-urbanistBold text-2xl pt-4'>{formattedTime()}</Text>
        </View>
    );
};

export default Timer





  
