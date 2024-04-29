// Dependencies
import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputBox = ({ title, value, titleWidth, keyboardType, handleChange}) => {
  return (
    <View className='relative p-1.5 ml-[23] mb-6'>
      <Text className={`text-lg text-placeholderGrey font-urbanistLight bg-white text-center absolute z-10 ml-8 ${titleWidth}`}>{title}</Text>
      <View className='border border-placeholderGrey w-[303] h-[45] rounded-md items-center mt-2 p-3'>
        <TextInput 
          className='flex-1 font-urbanist w-full'
          value={value}
          onChangeText={handleChange}
          secureTextEntry={title ==='Password' ? true : false }
          keyboardType={keyboardType}
        />
      </View>
    </View>
  )
}

export default InputBox;