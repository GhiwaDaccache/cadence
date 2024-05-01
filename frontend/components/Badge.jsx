// Dependencies
import React from 'react'
import { View, Text, Image } from 'react-native'

const Badge = ({ icon, title, date, distance, timing}) => {
  return (
    <View className='bg-grey flex flex-row w-[303] px-9 py-2 rounded-md'>
        <Image 
          source={icon} 
          resizeMode="contain" 
          className='w-14 h-14 self-center'
        />

      <View className='pl-8'>
        <Text className='text-base font-urbanistBold pb-1'>{title}</Text>
        <Text className='text-base font-urbanistLight'>{date}</Text>
        <Text className='text-base font-urbanistLight'>{distance} km</Text>
        <Text className='text-base font-urbanistLight'>{timing}</Text>
      </View>
    </View>
  )
}

export default Badge