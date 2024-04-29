// Dependencies
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

// Components
import AppName from '../../components/AppName';
import InputBox from '../../components/InputBox';

// Custom Hooks
import { useAuthenticationLogic } from './logic';

const Login = () => {
  const { setCredentials, credentials, handleLogin } =
    useAuthenticationLogic();

  return (
    <SafeAreaView className='bg-white h-full'>
      <AppName />
      <Text className='font-urbanistLight text-lg ml-[29] mb-[73]'>Let's get back on track in no time</Text>

      <InputBox 
        title="Email"
        value={credentials.email}
        handleChange={(e) => {
          setCredentials({ ...credentials, email: e.target.value });
        }}
        keyboardType="email-address"
        titleWidth=" w-[20%]"
      />

      <InputBox 
        title="Password"
        value={credentials.password}
        handleChange={(e) => {
          setCredentials({ ...credentials, password: e.target.value });
        }}
        keyboardType="password"
        titleWidth=" w-[30%]"
      />


    </SafeAreaView>
  )
}

export default Login;