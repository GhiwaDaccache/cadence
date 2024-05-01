import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '../assets/icons/icons'

const NextRun = () => {
  return (
    <View className='flex py-4 px-6 mx-7 mt-7 bg-grey rounded-md'>
        <Text className='font-urbanistBold text-base'>Next run</Text>
          <Text className='font-urbanist text-base'>Distance</Text>
            <View className='flex flex-row items-center'>
              <Text className='font-urbanist text-base pr-3'>2.9 km</Text>
              <Image 
                source={icons.road} 
                className='w-5 h-5'  
              />
            </View>
      </View>
  )
}

export default NextRun