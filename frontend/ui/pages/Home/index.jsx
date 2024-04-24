import React from 'react';
import { Button, View, Text } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text>Home screen</Text>
      <Button title="Go to Landing" onPress={() => navigation.navigate("Landing")} />
    </View>
  )
}

export default HomeScreen;