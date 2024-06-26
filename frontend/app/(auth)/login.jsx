// Dependencies
import React from 'react';
import { Link } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native';

// Components
import AppName from '../../components/AppName';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton';

// Custom Hooks
import { useAuthenticationLogic } from './logic/logic';

const Login = () => {
  const { setCredentials, credentials, handleLogin } =
    useAuthenticationLogic();

  return (
    <SafeAreaView className='bg-white h-full flex justify-center'>
      <AppName 
        placement={'ml-7'}
      />
      <Text className='font-urbanistLight text-lg ml-7 mb-[73]'>Let's get back on track in no time</Text>

      <InputBox 
        title="Username"
        value={credentials.username}
        handleChange={(e) => {
          setCredentials({ ...credentials, username: e});
        }}
        titleWidth=" w-[28%]"
      />

      <InputBox 
        title="Password"
        value={credentials.password}
        handleChange={(e) => {
          setCredentials({ ...credentials, password: e});
        }}
        titleWidth=" w-[28%]"
      />
      
      <View className='self-center pt-[100] flex items-center'>
        <PrimaryButton 
          title='Log in'           
          width='w-[170]'
          handlePress={handleLogin}
        />
        <Text className='font-urbanist text-sm'>Don't have an account?</Text>
        <Link href="/sign-up" className='font-urbanistBold text-sm text-primary'>Sign up</Link>
      </View>


    </SafeAreaView>
  )
}

export default Login;