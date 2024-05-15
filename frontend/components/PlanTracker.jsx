// Dependencies
import React from 'react';
import { View, Text, Image } from 'react-native';

// Assets
import icons from '../assets/icons/icons';

const PlanTracker = ({ planName, weeks, distance, currentWeek, weekRuns, runs }) => {
  return (
    <View className='flex py-3 px-6 mx-7 bg-grey rounded-md w-80 '>
        <Text className='font-urbanistBold text-base'>{planName}</Text>
        <View className='flex flex-row justify-between pt-2'>
            <Text className='font-urbanist text-base'>Total weeks</Text>
            <View className='flex flex-row'>
              <Text className='font-urbanist text-base'>{weeks}</Text>
              <Image 
                source={icons.schedule} 
                className='w-6 h-6'  
              />
            </View>
        </View>
        <View className='flex flex-row justify-between pt-2'>
          <Text className='font-urbanist text-base'>Total distance</Text>
            <View className='flex flex-row items-center'>
              <Text className='font-urbanist text-base pr-2'>{`${distance} km`}</Text>
              <Image 
                source={icons.road} 
                className='w-4 h-4' 
              />
            </View>
        </View>

        <View className='py-2 px-3 mt-2 bg-white rounded-md'>
          <View className='flex flex-row justify-between'>
            <Text className='font-usemibold text-base'>Week</Text>
            <Text className='font-urbanist text-base pr-9'>{currentWeek}</Text>
          </View>
          <View className='flex flex-row justify-between'>
            <Text className='font-usemibold text-base'>Total runs</Text>
            <Text className='font-urbanist text-base pr-9'>{weekRuns}</Text>
          </View>

          {runs.map((run, index) => (
          <View key={index} >
            <View className='flex flex-row py-1'>
              <View className='h-5 w-5 bg-primary rounded-md px-2'></View>
              <Text className='font-urbanist text-base px-3'>{run.day}</Text>
              <Text className='font-urbanist text-base px-3'>{run.distance} km</Text>
              <Text className='font-urbanist text-base px-3'>{run.real_duration}</Text>
            </View>
          </View>
        ))}
        </View>

      </View>
  )
}

export default PlanTracker;