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
        title={'First run'}
        icon={icons.trophy}
        timing={'00:00'}
        date={'00-00-2000'}
        distance={'00.00'}
      />

      <Badge
        title={'Early bird'}
        icon={icons.sunrise}
        timing={'00:00'}
        date={'00-00-2000'}
        distance={'00.00'}
      />

      <Badge
        title={'Longest distance'}
        icon={icons.distance}
        timing={'00:00'}
        date={'00-00-2000'}
        distance={'00.00'}
      />

      <Badge
        title={'Longest durantion'}
        icon={icons.timer}
        timing={'00:00'}
        date={'00-00-2000'}
        distance={'00.00'}
      />

    </View>
  )
}

export default Badges