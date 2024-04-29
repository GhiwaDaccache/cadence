import { View, Text, SafeAreaView } from 'react-native';
import React from 'react';
import LogoSmall from '../../assets/images/LogoSmall';

const StartRun = () => {
  return (
    <SafeAreaView className='bg-white h-full pt-[80] px-[29] flex items-center'>
      <LogoSmall/>
      <Text className='font-urbanistBold text-2xl pt-4'>00:00:00</Text>

      <View className='flex flex-row justify-between w-full pt-[40]'>

        <View>
          <Text className='text-base font-urbanist'>Distance (km)</Text>
          <Text className='text-2xl font-urbanistBold'>00.00</Text>
        </View>

        <View>
          <Text className='text-base font-urbanist'>Avg. pace (min/km)</Text>
          <Text className='text-2xl font-urbanistBold'>00:00</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default StartRun;