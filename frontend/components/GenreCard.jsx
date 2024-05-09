// Dependencies
import React from 'react';
import { View, Text } from 'react-native';

const GenreCard = ({ genre }) => {
  return (
    <View className='h-7 bg-darkGrey rounded-md flex justify-center items-center px-2 mx-1'>
        <Text className='font-urbanist'>{genre}</Text>
    </View>
  )
}

export default GenreCard;