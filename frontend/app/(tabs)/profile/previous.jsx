// Dependencies
import React from 'react';
import { View, Text, FlatList } from 'react-native';
 
// Components
import Run from '../../../components/Run';
import { usePrviousLogic } from './logic/previous-logic';

const previous = () => {
  const { previousRuns, setPreviousRuns } = usePrviousLogic();

  return (
    <View className='h-full bg-white flex items-center pt-3'>
      <FlatList 
        data = {previousRuns}
        keyExtractor={(item) => item.id}
        renderItem={({item})=> (
          <Run
          date={item.recorded_on}
          distance={item.real_distance}
          pace={item.real_pace}
          time={item.real_duration}
          />
        )}
      />
    </View>
  )
}

export default previous;