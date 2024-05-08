// Dependencies
import React from 'react';
import { View, Text, Image } from 'react-native';

const Badge = ({ icon, title, data, distance, timing}) => {
  return (
    <View className='bg-grey flex flex-row w-[303] px-9 py-2 rounded-md my-2'>
        <Image 
          source={icon} 
          resizeMode="contain" 
          className='w-14 h-14 self-center'
        />

      <View className='pl-8'>
        <Text className='text-base font-urbanistBold pb-1'>{title}</Text>
        {data.map((item, index) => (
          <Text key={index} className='text-base font-urbanistLight'>
            {item}
          </Text>
        ))}
      </View>
    </View>
  )
}

export default Badge;