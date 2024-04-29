import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppName from '../../components/AppName';
const Registration = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <AppName />
      <Text className='font-urbanistLight text-lg ml-[29] mb-[73]'>Welcome to Cadence! Let's get to {"\n"}know you first</Text>
    </SafeAreaView>
  )
}

export default Registration;