import { View, Text, Image } from 'react-native';
import React from 'react';
import icons from '../../assets/icons/icons';


const Discover = () => {
  return (
    <View className='bg-white h-full flex jusitify-center pt-20'>
          <View className='flex pt-4 bg-primary px-6 mx-7'>
        <Text  className='font-urbanistBold text-base'>Plan name</Text>
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
        <View>
          <Text>Week: 2</Text>
          <Text>Total runs: 2</Text>
          <View className='flex flex-row'>
          <View className='h-5 w-5 bg-grey rounded-md'></View>
          <Text>Mon</Text>
          <Text>2.4 km</Text>
          <Text>15:32</Text>
          </View>

          <View className='flex flex-row'>
          <View className='h-5 w-5 bg-black rounded-md'></View>
          <Text>Mon</Text>
          <Text>2.4 km</Text>
          <Text>15:32</Text>
          </View>

          <View className='flex flex-row'>
          <View className='h-5 w-5 bg-black rounded-md'></View>
          <Text>Mon</Text>
          <Text>2.4 km</Text>
          <Text>15:32</Text>
          </View>

        </View>

      </View>
    </View>
  )
}

export default Discover;