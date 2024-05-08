import { View, Text, Image, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Discover = () => {
  const genres = {
    "genres": ["alternative", "samba"]
  }

  return (
    <SafeAreaView className='bg-white h-full pt-20 flex items-center'>
      <View className='pt-10 bg-grey rounded'>
          <Text className='font-urbanistBold text-base'>Generate your playlist now</Text>
          <Text className='font-urbanist text-base'>Genre</Text>

          <SelectDropdown
            data={genres}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
              return (
                <View>
                  {selectedItem && (
                    <Icon name={selectedItem.icon}  />
                  )}
                  <Text >
                    {(selectedItem && selectedItem.title) || 'Select your mood'}
                  </Text>
                  <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} />
                </View>
              );
            }}
            renderItem={(item, index, isSelected) => {
              return (
                <View >
                  <Icon name={item.icon}  />
                  <Text >{item.title}</Text>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            
          />
      </View>
    </SafeAreaView>
  )
}

export default Discover;