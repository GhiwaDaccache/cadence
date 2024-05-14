// Dependencies 
import React from 'react';
import { View } from 'react-native';

// Components
import Badge from '../../../components/Badge';

// Assets
import icons from '../../../assets/icons/icons';

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