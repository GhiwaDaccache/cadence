// Dependencies
import React from 'react';
import { View, Text, Image } from 'react-native';

// Assets
import icons from '../assets/icons/icons';

const Run = ({ time, distance, pace, date }) => {
  return (
    <View className='bg-grey flex flex-row w-[303] justify-center items-center py-2 rounded-md my-2'>
        <Image 
          source={icons.run} 
          resizeMode="contain" 
          className='w-12 h-12 self-center'
        />

      <View className='pl-8'>
        <Text className='text-base font-urbanistMedium pb-1'>{date}</Text>
        <View className='flex flex-row items-center'> 
          <Text className='text-base font-urbanistLight'>{time}  </Text>
          <Image source={icons.dot}/>
          <Text className='text-base font-urbanistLight'> {distance} km  </Text>
          <Image source={icons.dot}/>
          <Text className='text-base font-urbanistLight'> {pace} min/km</Text>
        </View>
      </View>
    </View>
  )
}

export default Run;