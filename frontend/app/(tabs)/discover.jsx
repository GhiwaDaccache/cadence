// Dependencies
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

// Components
import PrimaryButton from '../../components/PrimaryButton';
import IntervalInput from '../../components/IntervalInput';

// Custom hooks
import { useGeneratePlaylistLogic } from './logic/generate-playlist-logic';
import { useDiscoverLogic } from './logic/discover-logic';


const Discover = () => {
  const { intervals, setIntervalTime, setIntervalPace,addInterval, genres, renderGenreCard, handleGenerate } = useGeneratePlaylistLogic()
  const{ renderPlans } = useDiscoverLogic();
  return (
    <SafeAreaView className='bg-white h-full pt-20 flex items-center'>
      <View className='py-3 bg-grey rounded mx-7 w-80 pl-2'>
          <Text className='font-urbanistBold text-base self-center pb-1'>Generate your playlist now</Text>
          <Text className='font-usemibold text-base pb-2'>Genre</Text>
          
          <FlatList
            data={genres.genres}
            renderItem={renderGenreCard}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text className='font-usemibold text-base pt-4'>Intervals</Text>
          <View className='flex flex-row justify-between w-60'>
            <Text className='font-urbanist text-base'>Time (min)</Text>
            <Text className='font-urbanist text-base mr-2'>Pace (min/km)</Text>
          </View>

          <View className='flex flex-row justify-between py-2 mr-2 w-52'>
          {intervals.map((interval, index) => (
          <View key={index} className='flex flex-row justify-between py-2 mr-2 w-52'>
            <IntervalInput
              placeholder={"12"}
              value={interval.time}
              handleChange={(e) => setIntervalTime(index, e)}
            />
            <IntervalInput
              placeholder={"6"}
              value={interval.pace}
              handleChange={(e) => setIntervalPace(index, e)}
            />
          </View>
        ))}

        <TouchableOpacity onPress={addInterval}>
          <Text className='font-urbanist text-base text-blue-500 pt-2'>Add Interval</Text>
        </TouchableOpacity>
          </View>

          <View className='self-center pt-2'>
            <PrimaryButton 
            title={'Generate'}
            width={'w-32'}
            handlePress={handleGenerate}
            />
          </View>
      </View>

      <View className='w-full flex items-start px-5'>
        <Text className='font-urbanistBold text-base pt-4'>Plans</Text>
        {renderPlans()}
      </View>

      <View>
        <Text>Test</Text>
      </View>
    </SafeAreaView>
  )
}

export default Discover;

