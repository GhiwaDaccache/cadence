// Dependencies
import React from 'react';
import { View, Text } from 'react-native';

// Assets
import LogoSmall from '../assets/images/LogoSmall';

const AppName = ({placement}) => {
  return (
    <View className={`flex flex-row ${placement}`}>
        <LogoSmall />
            <View className='h-11 flex justify-end mt-[5] ml-0.5'>
            <Text className='text-3xl font-urbanistBold text-primary'>adence</Text>
        </View>
    </View>
  )
}

export default AppName;