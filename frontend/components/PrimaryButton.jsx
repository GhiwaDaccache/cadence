// Dependencies
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const PrimaryButton = ({ title, handlePress, width, rounded = true}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.8}
        className={`flex justify-center items-center h-[50] ${rounded ? 'rounded-md' : 'rounded-none'} bg-primary ${width}`}>
      <Text className={`font-usemibold text-2xl text-white`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton;