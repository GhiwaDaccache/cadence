// Dependencies
import React from 'react';
import { SafeAreaView, Image, View, StatusBar } from 'react-native';

// Assets
import images from '../../assets/images/images'; 

// Components
import GreyInputBox from '../../components/GreyInputBox';
import PrimaryButton from '../../components/PrimaryButton';
import OutlineButton from '../../components/OutlineButton';

const Settings = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <StatusBar backgroundColor='white'/>
      <View className='w-full h-[250]'>
        <Image source={images.cover} className='h-full w-full'  />
      </View>

      <View className='absolute z-10 top-48 left-7 w-24 h-24'>
        <Image source={images.profile} className='h-full w-full'  />
      </View>

      <View className='pt-14 pb-24'>
        <GreyInputBox 
          title={'Full Name'}   
        />

        <GreyInputBox 
          title={'Email'}   
        />
      </View>

      <View className='flex flex-row self-center justify-evenly w-full'>
        <PrimaryButton
          title={'Save'}
          width={'w-[120]'}
        />

        <OutlineButton
          title={'Log out'}
          width={'w-[120]'}
        />
      </View>

    </SafeAreaView>
  )
}

export default Settings;