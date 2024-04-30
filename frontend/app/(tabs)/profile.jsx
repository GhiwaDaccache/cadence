// Dependencies
import React from 'react';
import { SafeAreaView, Text, Image, View, StatusBar } from 'react-native';

// Assets
import icons, { history } from '../../assets/icons/icons'
import images from '../../assets/images/images'; 

const Profile = () => {
  return (
    <SafeAreaView className='bg-white h-full flex items-center'>
      <StatusBar backgroundColor='white'/>
      <View className='w-full h-2/5'>
        <Image source={images.cover} className='h-full w-full'  />
      </View>

      <View className='absolute z-10 top-56 left-10 w-24 h-24'>
        <Image source={images.profile}  className='h-full w-full'  />
      </View>

      <Text className='font-usemibold text-lg'>John Doe</Text>

      <View className='w-20 h-20 bg-grey rounded-md flex items-center pt-2'>
        <Image 
          source={icons.history} 
          resizeMode="contain" 
          className='w-8 h-8'
          />
          <Text className='font-urbanistLight pt-2'>Previous</Text>
      </View>
    </SafeAreaView>
  )
}

export default Profile;