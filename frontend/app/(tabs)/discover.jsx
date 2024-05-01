import { View, Text, Image } from 'react-native';
import React from 'react';
import icons from '../../assets/icons/icons';


const Discover = () => {
  return (
    <View className='bg-white h-full flex jusitify-center pt-20'>
          <View className='flex py-4 px-6 mx-7 bg-grey rounded-md'>
        <Text className='font-urbanistBold text-base'>Plan name</Text>
        <View className='flex flex-row justify-between pt-2'>
          <View>
            <Text className='font-urbanist text-base'>Total weeks</Text>
            <View className='flex flex-row'>
              <Text className='font-urbanist text-base'>5</Text>
              <Image 
                source={icons.schedule} 
                className='w-6 h-6'  
              />
            </View>
          </View>

          <View>
            <Text className='font-urbanist text-base'>Total distance</Text>
            <View className='flex flex-row'>
              <Text className='font-urbanist text-base'>15.32 km</Text>
              <Image 
                source={icons.road} 
                className='w-6 h-6' 
              />
            </View>
          </View>
        </View>
        <View className='py-2 px-3 mt-5 bg-white rounded-md'>
          <Text className='font-urbanist text-base'>Week: 2</Text>
          <Text className='font-urbanist text-base'>Total runs: 2</Text>
          <View className='flex flex-row py-2'>
            <View className='h-5 w-5 bg-primary rounded-md px-2'></View>
            <Text className='font-urbanist text-base px-3'>Mon</Text>
            <Text className='font-urbanist text-base px-3'>2.4 km</Text>
            <Text className='font-urbanist text-base px-3'>15:32</Text>
          </View>

          <View className='flex flex-row py-2'>
            <View className='h-5 w-5 bg-grey rounded-md'></View>
            <Text className='font-urbanist text-base px-3'>Mon</Text>
            <Text className='font-urbanist text-base px-3'>2.4 km</Text>
            <Text className='font-urbanist text-base px-3'></Text>
          </View>

          <View className='flex flex-row py-2'>
            <View className='h-5 w-5 bg-grey rounded-md'></View>
            <Text className='font-urbanist text-base px-3'>Mon</Text>
            <Text className='font-urbanist text-base px-3'>2.4 km</Text>
            <Text className='font-urbanist text-base px-3'></Text>
          </View>

        </View>

      </View>
    </View>
  )
}

export default Discover;