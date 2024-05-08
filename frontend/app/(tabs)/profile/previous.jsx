// Dependencies
import React from 'react';
import { View, Text, FlatList } from 'react-native';
 
// Components
import Run from '../../../components/Run';

const previous = () => {
  const previousRuns = [
    {
        "id": 1,
        "recorded_on": "2024-05-02",
        "start_time": "12:02:35",
        "end_time": "12:07:35",
        "real_pace": 5.0,
        "real_distance": 5.0,
        "real_duration": "25:21",
        "user": 17,
        "run": null
    },
    {
        "id": 3,
        "recorded_on": "2024-05-02",
        "start_time": "12:02:35",
        "end_time": "12:07:35",
        "real_pace": 7.0,
        "real_distance": 5.2,
        "real_duration": "30:01",
        "user": 17,
        "run": null
    }
]

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