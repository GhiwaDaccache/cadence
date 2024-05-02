// Dependencies
import React from 'react';
import { View, Text } from 'react-native';
 
// Components
import Run from '../../../components/Run';

const previous = () => {
  return (
    <View className='h-full bg-white flex items-center pt-3'>
      <Run 
        title={'Monday run'}
        date={'02-04-2024'}
        distance={'7.54'}
        pace={'8:15'}
        time={'58:21'}
      />

      <Run 
        title={'Warm up'}
        date={'07-04-2024'}
        distance={'3.21'}
        pace={'6:21'}
        time={'23:18'}
      />

    </View>
  )
}

export default previous