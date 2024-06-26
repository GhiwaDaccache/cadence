// Dependencies
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const PrimaryButton = ({ title, handlePress, width, rounded = true}) => {
  return (
    <TouchableOpacity 
        onPress={handlePress}
        activeOpacity={0.8}
        className={`flex justify-center items-center h-12 bg-primary ${width} ${rounded ? 'rounded-md' : 'rounded-none'}`}>
      <Text className={`font-usemibold text-xl text-white`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton;