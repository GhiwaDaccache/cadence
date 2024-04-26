// Dependencies
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ title, handlePress, color, textColor, width}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.8}
        className={`flex justify-center items-center h-[50] rounded-md  ${color} ${width}`}>
      <Text className={`font-urbanistBold text-2xl ${textColor}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;