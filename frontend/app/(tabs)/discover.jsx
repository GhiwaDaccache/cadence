import { View, Text, Image, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React from 'react';

const Discover = () => {
  const genres = [{title: 'Classical'}, {title: 'Alternative'}]
  // Genres api:
  // {
  // "genres": ["alternative", "samba"]
  // }

  return (
    <SafeAreaView className='bg-white h-full pt-20 flex items-center'>
      <View className='pt-5 bg-grey rounded mx-7 w-72 px-2 h-40'>
          <Text className='font-urbanistBold text-base self-center pb-1'>Generate your playlist now</Text>

          <Text className='font-urbanist text-base pb-2'>Genre</Text>
          <View className='h-7 bg-darkGrey rounded-md flex justify-center items-center'>
            <Text className='font-urbanist'>Classical</Text>
          </View>

          <Text className='font-urbanist text-base pt-2'>Intervals</Text>

      </View>


    </SafeAreaView>
  )
}

export default Discover;

