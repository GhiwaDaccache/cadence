// Dependencies
import React from 'react';
import { View } from 'react-native';

// Components
import NextRun from '../../../components/NextRun';

// Custom hooks
import { usePlanLogic } from './logic/plan-logic';

const Plan = () => {
  const { renderPlan } = usePlanLogic()
  return (
    <View className='h-full bg-white flex items-center pt-5'>
      {renderPlan()}
      <NextRun 
        distance={'2.9'}
      />
    </View>
  )
}

export default Plan;