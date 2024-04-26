// Dependencies
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const OutlineButton = ({ title, handlePress, width}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.8}
        className={`flex justify-center items-center h-[50] border-[1] border-[#A00119] border-solid rounded-md ${width}`}>
      <Text className={`font-urbanistBold text-2xl text-primary`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default OutlineButton;