// Dependencies 
import React from 'react';
import { View, Text } from 'react-native';

// Components
import Badge from '../../../components/Badge';

// Assets
import icons from '../../../assets/icons/icons';

const Badges = () => {
  return (
    <View>
      <Badge
        title={'Early bird'}
        icon={icons.sunrise}
        timing={'00:00'}
        date={'00-00-2000'}
        distance={'00.00'}
      />
    </View>
  )
}

export default Badges