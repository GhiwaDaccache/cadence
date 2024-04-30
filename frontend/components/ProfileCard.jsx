// Dependencies
import React from 'react';
import { View, Text, Image } from 'react-native';


const ProfileCard = ({ title, icon }) => {
  return (
    <View className='w-20 h-20 bg-grey rounded-md flex items-center pt-2'>
    <Image 
      source={icon} 
      resizeMode="contain" 
      className='w-8 h-8'
      />
      <Text className='font-urbanistLight pt-2'>{title}</Text>
  </View>
  )
}

export default ProfileCard;