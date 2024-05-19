// Dependencies
import React from 'react';
import { router } from 'expo-router';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';

// Assets 
import icons from '../../assets/icons/icons';

// Components
import PrimaryButton from '../../components/PrimaryButton';
import IntervalInput from '../../components/IntervalInput';

// Custom hooks
import { useGeneratePlaylistLogic } from './logic/generate-playlist-logic';
import { useDiscoverLogic } from './logic/discover-logic';


const Discover = () => {
  const { intervals, setIntervalTime, setIntervalPace, addInterval, genres, renderGenreCard, handleGenerate } = useGeneratePlaylistLogic()
  const { renderPlans } = useDiscoverLogic();
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

          <View>
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
        </View>


        <TouchableOpacity onPress={addInterval}>
          <Text className='font-urbanist text-base text-primary pt-2'>Add Interval</Text>
        </TouchableOpacity>
          

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

      <TouchableOpacity       
      className='absolute left-[270] bottom-6 rounded-full h-16 w-16 bg-primary flex items-center justify-center'
      onPress={()=> {
        router.push()
      }}>
        <Image source={icons.openai} className='w-12 h-12'/>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default Discover;

