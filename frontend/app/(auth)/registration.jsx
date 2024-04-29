import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppName from '../../components/AppName';
import { TextInput } from 'react-native';
const Registration = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <AppName
      placement={'ml-[29] mt-[75]'}
      />
      <Text className='font-urbanistLight text-lg ml-[29] mb-[45]'>Welcome to Cadence! Let's get to {"\n"}know you first</Text>

      <View className=' p-1.5 ml-[23] mb-6'>
      <Text className='text-lg font-urbanistLight'>First name</Text>
      <View className='bg-grey w-[303] h-[45] border-b-2 rounded-t-md items-center mt-2 p-3'>
        <TextInput 
          className='flex-1 font-urbanist w-full'
          
        />
      </View>
    </View>
    </SafeAreaView>
  )
}

export default Registration;