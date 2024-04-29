// Dependencies
import React from 'react';
import { View, Text } from 'react-native';

const InputBox = ({ title, value, titleWidth, placeholder, handleChange}) => {
  return (
    <View className='relative p-1.5 ml-[23] mb-6'>
      <Text className={`text-lg text-placeholderGrey font-urbanist-Light bg-white text-center absolute z-10 ml-8 ${titleWidth}`}>{title}</Text>
      <View className='border border-placeholderGrey w-[303] h-[45] rounded-md focus:border-primary items-center mt-2'>
      </View>
    </View>
  )
}

export default InputBox;