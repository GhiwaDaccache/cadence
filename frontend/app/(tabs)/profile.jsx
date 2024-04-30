// Dependencies
import React from 'react';
import { SafeAreaView, Text, Image, View, StatusBar } from 'react-native';

// Components
import ProfileCard from '../../components/ProfileCard';

// Assets
import icons from '../../assets/icons/icons';
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
      <View className='flex flex-row w-full pt-10 px-[29] justify-between'>
        <ProfileCard
          title={'Previous'}
          icon={icons.history} 
        />

        <ProfileCard
          title={'Previous'}
          icon={icons.history} 
        />

        <ProfileCard
          title={'Previous'}
          icon={icons.history} 
        />

      </View>
     
    </SafeAreaView>
  )
}

export default Profile;