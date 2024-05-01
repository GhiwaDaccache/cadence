import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '../assets/icons/icons'

const Run = () => {
  return (
    <View className='bg-grey flex flex-row w-[303] px-7 py-2 rounded-md'>
        <Image 
          source={icons.run} 
          resizeMode="contain" 
          className='w-12 h-12 self-center'
        />

      <View className='pl-5'>
        <Text className='text-base font-urbanistLight pb-1'>Morning run</Text>
        <View className='flex flex-row items-center'> 
          <Text className='text-base font-urbanistLight'>41:23  </Text>
          <Image source={icons.dot}/>
          <Text className='text-base font-urbanistLight'> 7.01 km  </Text>
          <Image source={icons.dot}/>
          <Text className='text-base font-urbanistLight'> 5.23 min/km</Text>
        </View>
        <Text className='text-base font-urbanistLight pt-1'>16-04-2024</Text>
      </View>
    </View>
  )
}

export default Run