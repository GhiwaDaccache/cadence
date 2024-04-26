// Dependencies
import { View, Text, ImageBackground, StyleSheet, ScrollView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../assets/images/images'; 

const App = () => {
  return (
    <SafeAreaView className='h-full flex flex-row justify-center items-end'>
          <Image source={images.landingBg} className='h-full'/>
          <View className='w-[60]'></View>
          <Image source={images.logo} className='absolute top-24 left-8 '/>

    </SafeAreaView>
  );
}

export default App;



