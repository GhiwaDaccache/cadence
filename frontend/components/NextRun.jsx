// Dependencies
import React from 'react';
import { View, Text, Image } from 'react-native';

// Assets
import icons from '../assets/icons/icons';
import images from '../assets/images/images';

// Components
import PlaylistCard from '../components/PlaylistCard';

const NextRun = ({ distance, scheduleDate }) => {
  return (
    <View className='flex py-2 px-6 mx-7 mt-5 bg-grey rounded-md'>
      <Text className='font-urbanistBold text-base'>Next run</Text>

      <View className='flex flex-row justify-between'>
        <Text className='font-urbanist text-base'>Distance</Text>
        <View className='flex flex-row items-center'>
          <Text className='font-urbanist text-base pr-3'>{distance} km</Text>
          <Image 
            source={icons.road} 
            className='w-5 h-5'  
          />
        </View>
      </View>

      <View className='py-2 px-3 mt-2 bg-white rounded-md'>
        <Text className='font-urbanist text-base'>{scheduleDate}</Text>
        <Text className='font-urbanist text-base pt-1'>Intervals</Text>
        <View className='w-full bg-black rounded h-4 mt-2'></View>
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

export default NextRun;