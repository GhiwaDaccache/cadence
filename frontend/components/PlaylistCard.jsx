// Dependencies
import React from 'react';
import { View, Text, Image } from 'react-native';

const PlaylistCard = ({ image, title, time, level }) => {
  return (
    <View className='flex flex-row pt-6'>
        <Image 
          source={image}
        />
        <View className='flex justify-center pl-4'>
          <Text className='font-urbanistBold text-base'>{title}</Text>
          <Text className=' pt-3 font-urbanist'>{level}</Text>
          <Text>{time}</Text>
        </View>
      </View>
  )
}

export default PlaylistCard;