// Dependencies 
import React from 'react';
import { View } from 'react-native';

// Custom hooks
import { useBadgeLogic } from './logic/badges-logic';

const Badges = () => {
  const { renderBadges } = useBadgeLogic();
  
  return (
    <View className='h-full bg-white flex items-center pt-3'>
      {renderBadges()}
    </View>
  )
}

export default Badges