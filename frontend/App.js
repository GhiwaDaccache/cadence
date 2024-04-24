import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './ui/pages/home';
import LandingScreen from './ui/pages/landing';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
        />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;