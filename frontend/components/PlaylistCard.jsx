// Dependencies
import React from 'react';
import { View, Text, Image } from 'react-native';

// Assets
import images from '../assets/images/images';

const PlaylistCard = () => {
  return (
    <View className='flex flex-row pt-6 self-start pl-[29]'>
        <Image 
          source={images.playlist}
        />
        <View className='flex justify-center pl-4'>
          <Text className='font-urbanistsemibold text-base'>Monday runs</Text>
          <Text className=' pt-6'>Intermediate</Text>
          <Text>20:03</Text>
        </View>
      </View>
  )
}

export default PlaylistCard;