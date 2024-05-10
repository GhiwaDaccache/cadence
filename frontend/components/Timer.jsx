// Dependencies
import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

const Timer = ({ isRunning }) => {
    const [currentTime, setCurrentTime] = useState(new Date().setHours(0, 0, 0, 0)); 

    useEffect(() => {
        let timer;
        if(isRunning){
            timer = setInterval(() => {
                setCurrentTime(prevTime => {
                    const newTime = new Date(prevTime || 0)
                    newTime.setSeconds(newTime.getSeconds() + 1)
                    return newTime.getTime()
                })
            }, 1000)
        }else {
            setCurrentTime(new Date().setHours(0, 0, 0, 0));
          }
        return () => clearInterval(timer)
    }, [isRunning])

    const time = () => {
        const date = new Date(currentTime)
        const hours = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        const seconds = date.getSeconds().toString().padStart(2, '0')
        return `${hours}:${minutes}:${seconds}`
    }

    return (
        <View>
            <Text className='font-urbanistBold text-2xl pt-4'>{time()}</Text>
        </View>
    );
};

export default Timer;