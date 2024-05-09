import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
import GenreCard from '../../components/GenreCard';
import IntervalInput from '../../components/IntervalInput';
import PrimaryButton from '../../components/PrimaryButton'


const Discover = () => {
  // Genres api:
  const genres = {"genres": ["alternative", "samba", "classical", "french", "pop", "rock" ]}
  const [selectedGenre, setSelectedGenre] = useState(null);
  
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
           />
           <IntervalInput 
            placeholder={"6"}
           />
          </View>
          <View className='flex flex-row justify-between py-2 mr-2 w-52'>
           <IntervalInput 
            placeholder={"12"}
           />
           <IntervalInput 
            placeholder={"6"}
           />
          </View>
          <View className='flex flex-row justify-between py-2 mr-2 w-52'>
           <IntervalInput 
            placeholder={"12"}
           />
           <IntervalInput 
            placeholder={"6"}
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
      </View>
    </SafeAreaView>
  )
}

export default Discover;

