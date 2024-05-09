import { View, Text, Image, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native';
import React, {useState} from 'react';
import GenreCard from '../../components/GenreCard';
import IntervalInput from '../../components/IntervalInput';

const Discover = () => {
  // Genres api:
  const genres = {"genres": ["alternative", "samba", "classical", "french", "pop", "rock" ]}
  const [selectedGenre, setSelectedGenre] = useState(null);
  
  const renderGenreCard = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedGenre(item)}>
      <GenreCard
        genre={item}
        isSelected={selectedGenre === item}
      />
    </TouchableOpacity>
  )

  return (
    <SafeAreaView className='bg-white h-full pt-20 flex items-center'>
      <View className='pt-3 bg-grey rounded mx-7 w-72 px-2'>
          <Text className='font-urbanistBold text-base self-center pb-1'>Generate your playlist now</Text>

          <Text className='font-urbanist text-base pb-2'>Genre</Text>
          
          <FlatList
            data={genres.genres}
            renderItem={renderGenreCard}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />

          <Text className='font-urbanist text-base pt-2'>Intervals</Text>
          <View className='flex flex-row justify-between w-52'>
            <Text className='font-urbanist text-base'>Time (min)</Text>
            <Text className='font-urbanist text-base'>Pace (min/km)</Text>
          </View>

          <View className='flex flex-row justify-between w-52'>
           <IntervalInput />
          </View>

          <View className='flex flex-row justify-between w-52'>
            <Text className='font-urbanist text-base'>Time (min)</Text>
            <Text className='font-urbanist text-base'>Pace (min/km)</Text>
          </View>

          <TextInput/>
      </View>


    </SafeAreaView>
  )
}

export default Discover;

