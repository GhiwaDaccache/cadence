// Dependencies
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

// Components
import Timer from '../../components/Timer';
import LogoSmall from '../../assets/images/LogoSmall';
import PrimaryButton from '../../components/PrimaryButton';

// Custom hooks 
import { useStartRunLogic } from './logic/start-run-logic';
import { useMusicLogic } from './profile/logic/music-player-logic';

const StartRun = () => {
  const { handleStartStop, isRunning } = useStartRunLogic();
  const { playSound } = useMusicLogic();

  return (
    <SafeAreaView className='bg-white h-full pt-20 px-7 flex items-center'>
      <LogoSmall/>
      <Timer 
        isRunning={isRunning}
      />

      <View className='flex flex-row justify-between w-full pt-10'>

        <View>
          <Text className='text-base font-urbanist'>Distance (km)</Text>
          <Text className='text-2xl font-urbanistBold'>00.00</Text>
        </View>

        <View>
          <Text className='text-base font-urbanist'>Pace (min/km)</Text>
          <Text className='text-2xl font-urbanistBold'>00:00</Text>
        </View>

      </View>

      <Text className='text-base font-urbanist self-start pt-6 pb-56'>Start run to play music according to your pace</Text>
      <PrimaryButton 
        handlePress={playSound}
        title={'asdf'}
        width={'w-[170]'}
      />
      <PrimaryButton 
        title={isRunning ? 'Stop' : 'Start'}
        handlePress={handleStartStop}
        width='w-[170]'
      />
    </SafeAreaView>
  )
}

export default StartRun;