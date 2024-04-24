import React from 'react';
import { Button, View, Text, ImageBackground } from 'react-native';
import { landingStyles } from './landing-style';
import landingImage from './assets/landing-bg.jpg'


const LandingScreen = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={landingImage} resizeMode="cover" style={landingStyles.image}/>
      <Text>Landing</Text>
      <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
    </View>
  )
}

export default LandingScreen;