
import {Stack} from 'expo-router';
import { View, Text } from 'react-native';

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name='login'
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name='sign-up'
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen 
          name='registration'
          options={{
            headerShown: false
          }}
        />

      </Stack>
    </>
  )
}

export default AuthLayout;