// Dependencies
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

// Components
import PlanCard from '../../components/PlanCard';
import GenreCard from '../../components/GenreCard';
import PrimaryButton from '../../components/PrimaryButton';
import IntervalInput from '../../components/IntervalInput';

// Assets
import images from '../../assets/images/images';

// Custom hooks
import { useGeneratePlaylistLogic } from './logic/generate-playlist-logic';
import { useDiscoverLogic } from './logic/discover-logic';
const Discover = () => {
  const { firstInterval, setFirstInterval, secondInterval, setSecondInterval, thirdInterval, setThirdInterval, genres, renderGenreCard, handleGenerate } = useGeneratePlaylistLogic()
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
           <IntervalInput 
              placeholder={"12"}
              value={firstInterval.time}
              handleChange={(e) => {
                setFirstInterval({ ...firstInterval, time: e});
              }}
           />
           <IntervalInput 
            placeholder={"6"}
            value={firstInterval.pace}
            handleChange={(e) => {
              setFirstInterval({ ...firstInterval, pace: e});
            }}
           />
          </View>
          <View className='flex flex-row justify-between py-2 mr-2 w-52'>
           <IntervalInput 
            placeholder={"12"}
            value={secondInterval.time}
              handleChange={(e) => {
                setSecondInterval({ ...secondInterval, time: e});
              }}
           />
           <IntervalInput 
            placeholder={"6"}
            value={secondInterval.pace}
              handleChange={(e) => {
                setSecondInterval({ ...secondInterval, pace: e});
              }}
           />
          </View>
          <View className='flex flex-row justify-between py-2 mr-2 w-52'>
           <IntervalInput 
            placeholder={"12"}
            value={thirdInterval.time}
            handleChange={(e) => {
              setThirdInterval({ ...thirdInterval, time: e});
            }}
           />
           <IntervalInput 
            placeholder={"6"}
            value={thirdInterval.pace}
            handleChange={(e) => {
              setThirdInterval({ ...thirdInterval, pace: e});
            }}
           />
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
    </SafeAreaView>
  )
}

export default Discover;

