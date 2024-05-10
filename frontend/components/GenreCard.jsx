// Dependencies
import React from 'react';
import { View, Text } from 'react-native';

const GenreCard = ({ genre, selectedGenre }) => {
  let isSelected;
  if(genre === selectedGenre){
    isSelected = true
  }else{
    isSelected = false
  }
  
  return (
    <View className={`h-7 rounded-md flex justify-center items-center px-2 mx-1 ${isSelected ? 'bg-primary' : 'bg-darkGrey'}`}>
        <Text className={`font-urbanist ${isSelected ? 'text-white' : ''}`}>{genre}</Text>
    </View>
  )
}

export default GenreCard;