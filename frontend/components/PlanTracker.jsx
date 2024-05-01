import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '../../assets/icons/icons';

const PlanTracker = () => {
  return (
    <View className='flex pt-2 bg-primary pt-8'>
        <Text>Plan name</Text>
        <View className='flex flex-row justify-between'>
          <View>
            <Text>Total weeks</Text>
            <View className='flex flex-row'>
              <Text>5</Text>
              <Image 
                source={icons.schedule} 
                className='w-6 h-6'  
              />
            </View>
          </View>

          <View>
            <Text>Total distance</Text>
            <View className='flex flex-row'>
              <Text>15.32 km</Text>
              <Image 
                source={icons.road} 
                className='w-6 h-6' 
              />
            </View>
          </View>
        </View>
      </View>

  )
}

export default PlanTracker