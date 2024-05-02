// Dependencies
import { View, Text } from 'react-native'
import React from 'react'

// Components
import NextRun from '../../../components/NextRun';
import PlanTracker from '../../../components/PlanTracker';

const Plan = () => {
  return (
    <View>
      <PlanTracker />
      <NextRun />
    </View>
  )
}

export default Plan