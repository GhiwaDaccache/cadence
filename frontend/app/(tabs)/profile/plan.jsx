// Dependencies
import React from 'react';
import { View } from 'react-native';

// Components
import NextRun from '../../../components/NextRun';
import PlanTracker from '../../../components/PlanTracker';

const Plan = () => {
  return (
    <View className='h-full bg-white flex items-center pt-5'>
      <PlanTracker />
      <NextRun 
        distance={'2.9'}
        scheduleDate={'20-04-2024'}
      />
    </View>
  )
}

export default Plan;