// Dependencies
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

// Components
import PlanCard from '../../components/PlanCard';
import GenreCard from '../../components/GenreCard';
import PrimaryButton from '../../components/PrimaryButton';
import IntervalInput from '../../components/IntervalInput';

// Assets
import images from '../../assets/images/images';

// Custom hooks
import { useGeneratePlaylistLogic } from './logic/generate-playlist-logic';

const Discover = () => {
  const genres = {"genres": ["alternative", "samba", "acoustic", "french", "pop", "rock", "work-out", "hip-hop"]}
  const [selectedGenre, setSelectedGenre] = useState(null);
  const { intervals, setIntervals } = useGeneratePlaylistLogic()
  
  const renderGenreCard = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedGenre(item)}>
      <GenreCard
        genre={item}
        selectedGenre={selectedGenre}
      />
    </TouchableOpacity>
  )

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
              value={intervals[0].time}
              handleChange={(e) => {
                setIntervals({ ...intervals, time: e});
              }}
           />
           <IntervalInput 
            placeholder={"6"}
            value={intervals[0].pace}
              handleChange={(e) => {
                setIntervals({ ...intervals, pace: e});
              }}
           />
          </View>
          <View className='flex flex-row justify-between py-2 mr-2 w-52'>
           <IntervalInput 
            placeholder={"12"}
            value={intervals[1].time}
              handleChange={(e) => {
                setIntervals({ ...intervals, time: e});
              }}
           />
           <IntervalInput 
            placeholder={"6"}
            value={intervals[0].pace}
            handleChange={(e) => {
              setIntervals({ ...intervals, pace: e});
            }}
           />
          </View>
          <View className='flex flex-row justify-between py-2 mr-2 w-52'>
           <IntervalInput 
            placeholder={"12"}
            value={intervals[2].time}
            handleChange={(e) => {
              setIntervals({ ...intervals, time: e});
            }}
           />
           <IntervalInput 
            placeholder={"6"}
            value={intervals[0].pace}
            handleChange={(e) => {
              setIntervals({ ...intervals, pace: e});
            }}
           />
          </View>

          <View className='self-center pt-2'>
            <PrimaryButton 
            title={'Generate'}
            width={'w-32'}
            />
          </View>
      </View>

      <View className='w-full flex items-start px-5'>
        <Text className='font-urbanistBold text-base pt-4'>Plans</Text>
        <PlanCard 
          image={images.plan}
          distance={13.2}
          duration={5}
          level={'Intermediate'}
          title={'Road to 10k'}
        
        />
      </View>
    </SafeAreaView>
  )
}

export default Discover;

