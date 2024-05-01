import { View, Text, Image } from 'react-native';
import React from 'react';
import PlanTracker from '../../components/PlanTracker';
import icons from '../../assets/icons/icons';
import NextRun from '../../components/NextRun';
import Badge from '../../components/Badge'
const Discover = () => {
  return (
    <View className='bg-white h-full flex jusitify-center pt-20'>
      <PlanTracker/>
      <NextRun />
      
    </View>
  )
}

export default Discover;