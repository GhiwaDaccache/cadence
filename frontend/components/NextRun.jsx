import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '../assets/icons/icons'
import PlaylistCard from '../components/PlaylistCard'
import images from '../assets/images/images'
const NextRun = () => {
  return (
    <View className='flex py-2 px-6 mx-7 mt-5 bg-grey rounded-md'>
      <Text className='font-urbanistBold text-base'>Next run</Text>

      <View className='flex flex-row justify-between'>
        <Text className='font-urbanist text-base'>Distance</Text>
        <View className='flex flex-row items-center'>
          <Text className='font-urbanist text-base pr-3'>2.9 km</Text>
          <Image 
            source={icons.road} 
            className='w-5 h-5'  
          />
        </View>
      </View>

      <View className='py-2 px-3 mt-2 bg-white rounded-sm'>
        <Text className='font-urbanist text-base'>Week 2 Day 2</Text>
        <Text className='font-urbanist text-base pt-1'>Intervals</Text>
        <View className='w-full bg-black rounded-md h-4 mt-2'></View>
        <PlaylistCard 
          image={images.playlist}
          level={'Intermediate'}
          time={'20:41'}
          title={'Monday run'}
        />
      </View>
      </View>
  )
}

export default NextRun