// Dpendencies
import { Stack } from "expo-router";


const ProfileLayout = () => {

  return (
    <Stack>
      <Stack.Screen name="profile" options={{ headerShown: false}} />
      <Stack.Screen name="badges" 
        options={{
          title: 'Badges'          
        }}
      
      />
      <Stack.Screen name="plan" options={{ headerShown: false}} />
      <Stack.Screen name="previous" options={{ headerShown: false}} />
    </Stack>
  );
}

export default ProfileLayout;


