// Dependencies
import React from 'react';
import { router } from 'expo-router';
import { SafeAreaView, Text, Image, View, StatusBar, FlatList } from 'react-native';

// Components
import ProfileCard from '../../../components/ProfileCard';
import PlaylistCard from '../../../components/PlaylistCard';

// Assets
import icons from '../../../assets/icons/icons';
import images from '../../../assets/images/images'; 

// Custom hooks
import { useLocationLogic } from './logic/location-logic';
import { useProfileLogic } from './logic/profile-logic';

const Profile = () => {
  const { playlists, isloading, setIsLoading } = useProfileLogic()

  //useLocationLogic()
  const profileCardsData = [
    {
      source: 'previous',
      title: 'Previous',
      icon: icons.history,
    },
    {
      source: 'plan/',
      title: 'My plan',
      icon: icons.calendar,
    },
    {
      source: 'badges',
      title: 'Badges',
      icon: icons.medal,
    },
  ];

  const renderProfileCards = () => {
    return profileCardsData.map((card, index) => (
      <ProfileCard
        key={index}
        source={card.source}
        title={card.title}
        icon={card.icon}
      />
    ));
  };
    
  const renderPlaylists = () => {
    if (isloading) {
      return <Text>Loading playlists...</Text>;
    } else if (playlists.length == 0) {
      return <Text>No playlists available</Text>;
    } else {
      return (
        <FlatList
          className='self-start pl-7'
          showsVerticalScrollIndicator={false}
          data={playlists}
          renderItem={({ item }) => (
            <PlaylistCard
              image={images.playlist}
              time={'20:12'}
              level={item.playlist.level}
              title={item.playlist.name}
              handlePress={()=>{ 
                router.push(`/playlist/${item.playlist.id}`)
              }}
            />
          )}
          keyExtractor={(item) => item.playlist.id.toString()}
        />
      );
    }
  };

  return (
    <SafeAreaView className='bg-white h-full flex items-center'>
      <StatusBar backgroundColor='white'/>
      <View className='w-full h-[250]'>
        <Image source={images.cover} className='h-full w-full'  />
      </View>

      <View className='absolute z-10 top-48 left-7 w-24 h-24'>
        <Image source={images.profile}  className='h-full w-full'  />
      </View>

      <Text className='font-usemibold text-lg'>John Doe</Text>
      <View className='flex flex-row w-full pt-10 px-7 justify-between'>
        {renderProfileCards()}
      </View>

      <Text className='font-urbanistBold text-base self-start pl-7 pt-8'>Saved playlists</Text>
        {renderPlaylists()}
    </SafeAreaView>
  )
}

export default Profile;