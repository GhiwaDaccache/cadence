// Dependencies
import React from 'react';
import { View, Text, Image } from 'react-native';

// Assets
import images from '../assets/images/images';

const PlaylistCard = ({ image, title, time, level}) => {
  return (
    <View className='flex flex-row pt-6 self-start pl-[29]'>
        <Image 
          source={image}
        />
        <View className='flex justify-center pl-4'>
          <Text className='font-urbanistsemibold text-base'>{title}</Text>
          <Text className=' pt-6'>{level}</Text>
          <Text>{time}</Text>
        </View>
      </View>
  )
}

export default PlaylistCard;