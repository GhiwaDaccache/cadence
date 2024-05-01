// Dependencies
import React from 'react'
import { View, Text, Image } from 'react-native'

//Assets
import icons from '../assets/icons/icons';

const Badge = () => {
  return (
    <View className='bg-grey flex flex-row w-[303] px-9 py-2 rounded-md'>
        <Image 
          source={icons.trophy} 
          resizeMode="contain" 
          className='w-14 h-14 self-center'
        />

      <View className='pl-8'>
        <Text className='text-base font-urbanistBold pb-1'>First run</Text>
        <Text className='text-base font-urbanistLight'>15-08-2023</Text>
        <Text className='text-base font-urbanistLight'>3.81 km</Text>
        <Text className='text-base font-urbanistLight'>30:12</Text>
      </View>
    </View>
  )
}

export default Badge