import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useLocationLogic } from '../app/(tabs)/profile/logic/location-logic';

const Distance = ({ isRunning }) => {
    const { location } = useLocationLogic()
    const [speed, setSpeed] = useState(0)
    const [time, setTime] = useState(0)
    const [distance, setDistance] = useState(0)
  
    useEffect(() => {
      const calculateDistance = () => {
        const ranDistance = speed * time
        setDistance((ranDistance / 1000).toFixed(2))
      }

      if (isRunning) {
        calculateDistance()
      } else {
        setDistance('00.00')
      }
    }, [isRunning, speed, time])
  
    useEffect(() => {
      if (location.speed) {
        setSpeed(location.speed)
        setTime(prevTime => prevTime + 5)
      }
    }, [location])

  return (
    <View>
      <Text className='text-2xl font-urbanistBold'>{distance !== null ? distance : '00.00'}</Text>
    </View>
  )
}

export default Distance;