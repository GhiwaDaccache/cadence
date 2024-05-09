// Dependencies
import React from 'react';
import { View, Text, Image} from 'react-native';

const PlanCard = ({ image }) => {
  return (
    <View className='flex flex-row pt-6'>
        <Image 
          source={image}
        />
        <View className='flex justify-center pl-4'>
          <Text className='font-urbanistBold text-base'>{title}</Text>
          <Text className=' pt-3 font-urbanist'>{level}</Text>
          <Text>{distance}</Text>
          <Text>{duration}</Text>
        </View>
      </View>
  )
}

export default PlanCard