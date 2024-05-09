// Dependencies
import React from 'react';
import { View, Text } from 'react-native';


const SongCard = ({ image, songName, artistName }) => {
  return (
    <View className='flex flex-row pt-6'>
        <Image 
          source={image}
        />
        <View className='flex justify-center pl-4'>
          <Text className='font-urbanistBold text-base'>{songName}</Text>
          <Text className=' pt-3 font-urbanist'>{artistName}</Text>
        </View>
      </View>
  )
}

export default SongCard;