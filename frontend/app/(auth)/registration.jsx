import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppName from '../../components/AppName';
import GreyInputBox from '../../components/GreyInputBox'
import {useRegistrationLogic} from './registration-logic';


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
      
      
    </SafeAreaView>
  )
}

export default Registration;