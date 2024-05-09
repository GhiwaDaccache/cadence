import { View, Text, Image, SafeAreaView, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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

          <Text className='font-urbanist text-base'>Genre</Text>
          <SelectDropdown
            data={genres}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View style={styles.dropdownButtonStyle}>
                  <Text className='font-urbanist text-base'>
                    {(selectedItem && selectedItem.title) || 'Select your genre'}
                  </Text>
                  <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
                </View>
              );
            }}
            renderItem={(item) => {
              return (
                <View style={styles.dropdownItemStyle}>
                  <Text className='font-urbanist text-base'>{item.title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
          />

          <Text className='font-urbanist text-base pt-2'>Intervals</Text>

      </View>


    </SafeAreaView>
  )
}

export default Discover;

const styles = StyleSheet.create({
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
});