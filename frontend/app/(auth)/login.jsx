// Dependencies
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

// Components
import AppName from '../../components/AppName';
import InputBox from '../../components/InputBox';

const Login = () => {
  return (
    <SafeAreaView>
      <AppName />
      <Text className='font-urbanistLight text-lg ml-[29]'>Let's get back on track in no time</Text>

      <InputBox />
    </SafeAreaView>
  )
}

export default Login;