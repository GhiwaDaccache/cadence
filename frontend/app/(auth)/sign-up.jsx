// Dependencies
import React from 'react';
import { Link } from 'expo-router';
import { View, Text, SafeAreaView } from 'react-native';

// Components
import AppName from '../../components/AppName';
import InputBox from '../../components/InputBox';
import PrimaryButton from '../../components/PrimaryButton'

// Custom Hooks
import { useAuthenticationLogic } from './logic';

const SignUp = () => {
  const { setInfo, info, handleSignUp } =
    useAuthenticationLogic();

  return (
    <SafeAreaView className='bg-white h-full'>
      <AppName />
      <Text className='font-urbanistLight text-lg ml-[29] mb-[53]'>Let's get ready to hit the track</Text>

      <InputBox 
        title="Email"
        value={info.email}
        handleChange={(e) => {
          setInfo({ ...info, email: e});
        }}
        keyboardType="email-address"
        titleWidth=" w-[18%]"
      />

      <InputBox 
        title="Username"
        value={info.usename}
        handleChange={(e) => {
          setInfo({ ...info, username: e});
        }}
        titleWidth=" w-[28%]"
      />

      <InputBox 
        title="Password"
        value={info.password}
        handleChange={(e) => {
          setInfo({ ...info, password: e});
        }}
        titleWidth=" w-[28%]"
      />
      <View className='self-center pt-[30] flex items-center'>
        <PrimaryButton 
          title='Sign up'           
          width='w-[170]'
          handlePress={handleSignUp}
        />
        <Text className='font-urbanist text-sm'>Already have an account?</Text>
        <Link href="/login" className='font-urbanistBold text-sm text-primary'>Log in</Link>
      </View>


    </SafeAreaView>
  )
}

export default SignUp;