// Dependencies
import React from 'react';
import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import AppName from '../../components/AppName';
import GreyInputBox from '../../components/GreyInputBox'
import PrimaryButton from '../../components/PrimaryButton';

// Custom Hooks
import {useRegistrationLogic} from './logic/registration-logic';

const Registration = () => {
  const { record, setRecord } = useRegistrationLogic();

  return (
    <SafeAreaView className='bg-white h-full'>
      <AppName
      placement={'ml-[29] mt-[75]'}
      />
      <Text className='font-urbanistLight text-lg ml-[29] mb-[45]'>Welcome to Cadence! Let's get to {"\n"}know you first</Text>
      <GreyInputBox
        title={'First name'} 
        placeholder={'John'}
        handleChange={(e)=>{
          setRecord({ ...record, firstName: e});
        }}
        value={record.firstName}
      />

      <GreyInputBox
        title={'Last name'} 
        placeholder={'Doe'}
        handleChange={(e)=>{
          setRecord({ ...record, lastName: e});
        }}
        value={record.lastName}
      />

      <View className='self-center mt-[90]'>
        <PrimaryButton
          title='Next'           
          width='w-[170]'
          handlePress={() => {
            router.push('/second-registration')
          }}
        />
      </View>
      
    </SafeAreaView>
  )
}

export default Registration;