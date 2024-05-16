// Dependencies
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const PlaylistCard = ({ image, title, time, level, handlePress, imageSize, titleSize }) => {
  return (
    <TouchableOpacity className='flex flex-row pt-6' onPress={handlePress}>
        <Image 
          className={`${imageSize} rounded-md`}
          source={image}
        />
        <View className='flex justify-center pl-4'>
          <Text className={`font-urbanistBold ${titleSize}`}>{title}</Text>
          <Text className=' pt-3 font-urbanist'>{level}</Text>
          <Text className=' font-urbanist'>{time}</Text>
        </View>
      </ TouchableOpacity >
  )
}

export default PlaylistCard;
