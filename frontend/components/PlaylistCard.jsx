// Dependencies
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const PlaylistCard = ({ image, title, time, level, handlePress, imageSize }) => {
  return (
    <TouchableOpacity className='flex flex-row pt-6' onPress={handlePress}>
        <Image 
          className={imageSize}
          source={image}
        />
        <View className='flex justify-center pl-4'>
          <Text className='font-urbanistBold text-base'>{title}</Text>
          <Text className=' pt-3 font-urbanist'>{level}</Text>
          <Text>{time}</Text>
        </View>
      </ TouchableOpacity >
  )
}

export default PlaylistCard;