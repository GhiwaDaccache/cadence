// Dependencies 
import React from 'react';
import { View } from 'react-native';

// Components
import Badge from '../../../components/Badge';

// Assets
import icons from '../../../assets/icons/icons';

const Badges = () => {
  return (
    <View className='h-full bg-white flex items-center pt-3'>
      <Badge
        title={'First run'}
        icon={icons.trophy}
        date={"00-00-2000"}
        distance={"00.00"}
        time={"00:00"}
      />

      <Badge
        title={'Early bird'}
        icon={icons.sunrise}
        date={"00-00-2000"}
        distance={"00.00"}
        time={"00:00"}
      />

      <Badge
        title={'Longest distance'}
        icon={icons.distance}
        date={"00-00-2000"}
        distance={"00.00"}
        time={"00:00"}
      />

      <Badge
        title={'Longest duration'}
        icon={icons.timer}
        date={"00-00-2000"}
        distance={"00.00"}
        time={"00:00"}
      />

    </View>
  )
}

export default Badges