// Dependencies
import React from 'react';
import { View, Text, TextInput} from 'react-native';

const GreyInputBox = ({ title, value, placeholder, handleChange, autoComplete }) => {
  return (
    <View className=' p-1.5 ml-[23] mb-2'>
      <Text className='text-lg font-urbanistLight'>{title}</Text>
      <View className='bg-grey w-[303] h-[45] border-b-2 rounded-t-md items-center mt-2 p-3'>
        <TextInput 
          className='flex-1 font-urbanist w-full'
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange}  
          autoComplete={autoComplete}     
        />
      </View>
    </View>
  )
}

export default GreyInputBox;

