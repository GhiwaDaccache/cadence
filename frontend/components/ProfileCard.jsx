// Dependencies
import React from 'react';
import { router } from 'expo-router';
import { Text, Image, TouchableOpacity } from 'react-native';

const ProfileCard = ({ title, icon, source }) => {
  return (
    <TouchableOpacity className='w-20 h-20 bg-grey rounded-md flex items-center pt-2'
        onPress={()=> {
            router.push(`/${source}`)
        }}
        // onPress={handleNavigation}
    >
    <Image 
      source={icon} 
      resizeMode="contain" 
      className='w-8 h-8'
      />
      <Text className='font-urbanistLight pt-2'>{title}</Text>
  </TouchableOpacity>
  )
}

export default ProfileCard;