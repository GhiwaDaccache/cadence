// Dependencies
import React from 'react';
import { View } from 'react-native';
 
// Components
import { usePrviousLogic } from './logic/previous-logic';

const previous = () => {
  const { renderPreviousRuns } = usePrviousLogic();

  return (
    <View className='h-full bg-white flex items-center pt-3'>
      {renderPreviousRuns()}
    </View>
  )
}

export default previous;