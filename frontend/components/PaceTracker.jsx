import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useLocationLogic } from '../app/(tabs)/profile/logic/location-logic';
import { convertToPace } from '../tools/utils/convertSpeed';

const PaceTracker = ({ isRunning }) => {
    const [pace, setPace] = useState(null)
    const { location } = useLocationLogic()

    useEffect(() => {
        if (isRunning && location && location.speed) {
            setPace(convertToPace(location.speed));
        } else {
            setPace(null);
        }
    }, [isRunning, location]);
    
    
        useEffect(()=>{
            console.log('pace: ', pace)
        }, [pace])

    
  return (
    <View>
      <Text className='text-2xl font-urbanistBold'>{pace !== null ? pace : '00:00'}</Text>
    </View>
  )
}

export default PaceTracker;