// Dependencies
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const OutlineButton = ({ title, handlePress, width}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.6}
        className={`flex justify-center items-center h-12 border-2 border-primary rounded-md ${width}`}>
      <Text className={`font-usemibold text-xl text-primary`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default OutlineButton;