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
    <View>
      {renderPlan()}
    </View>
  )
}

export default Plan;