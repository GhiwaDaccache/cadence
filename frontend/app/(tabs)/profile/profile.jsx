// Dependencies
import React from 'react';
import { SafeAreaView, Text, Image, View, StatusBar } from 'react-native';

// Components
import ProfileCard from '../../../components/ProfileCard';

// Assets
import icons from '../../../assets/icons/icons';
import images from '../../../assets/images/images';

// Custom hooks
import { useProfileLogic } from './logic/profile-logic';
import { useLocationLogic } from './logic/location-logic';

const Profile = () => {
  const { renderPlaylists, user } = useProfileLogic()
 // useLocationLogic()

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
    

  return (
    <SafeAreaView className='bg-white h-full flex items-center'>
      <StatusBar backgroundColor='white'/>
      <View className='w-full h-[250]'>
        <Image source={images.cover} className='h-full w-full'  />
      </View>

      <View className='absolute z-10 top-48 left-7 w-24 h-24'>
        <Image source={`../../../../backend/cadence/media/profile_images/${user['profile_photo']}/`}  className='h-full w-full'  />
      </View>

      <Text className='font-usemibold text-lg pl-8'>{user['first-name']} {user['last-name']}</Text>
      <View className='flex flex-row w-full pt-10 px-7 justify-between'>
        {renderProfileCards()}
      </View>

      <Text className='font-urbanistBold text-base self-start pl-7 pt-8'>Saved playlists</Text>
        {renderPlaylists()}
    </SafeAreaView>
  )
}

export default Profile;