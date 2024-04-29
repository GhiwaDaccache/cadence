// Dependencies
import { router } from 'expo-router';
import React, {useState} from 'react';
import { Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { SafeAreaView } from 'react-native-safe-area-context';

// Components
import AppName from '../../components/AppName';
import GreyInputBox from '../../components/GreyInputBox'
import PrimaryButton from '../../components/PrimaryButton';

// Custom Hooks
import {useRegistrationLogic} from './logic/registration-logic';

const SecondRegistration = () => {
    const { record, setRecord } = useRegistrationLogic();
    const genderInput =['Male', 'Female']

    return (
        <SafeAreaView className='bg-white h-full'>
        <AppName
        placement={'ml-[29] mt-[75]'}
        />
        <Text className='font-urbanistLight text-lg ml-[29] mb-[10]'>Welcome to Cadence! Let's get to {"\n"}know you first</Text>
        <GreyInputBox
            autoComplete='birthdate-full'
            title={'Age'} 
            handleChange={(e)=>{
            setRecord({...record, age: e});
            }}
            value={record.age}
        />

        <GreyInputBox
            title={'Sex'} 
            handleChange={(e)=>{
            setRecord({...record, sex: e});
            }}
            value={record.sex}
        />

        <GreyInputBox
            title={'Weight (kg)'} 
            handleChange={(e)=>{
            setRecord({...record, sex: e});
            }}
            value={record.sex}
        />


        <View className='self-center mt-[25]'>
            <PrimaryButton
            title='Finish'           
            width='w-[170]'
            handlePress={() => {
                router.push('/profile')
              }}
            />
        </View>
        
        </SafeAreaView>
    )
}

export default SecondRegistration;
