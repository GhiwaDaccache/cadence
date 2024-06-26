// Dpendencies
import { Stack } from "expo-router";

const ProfileLayout = () => {

  return (
    <Stack>
      <Stack.Screen name="profile" options={{ headerShown: false}} />
      <Stack.Screen name="badges" options={{ title: 'Badges' }} />
      <Stack.Screen name="plan" options={{ title: 'My Plan' }} />
      <Stack.Screen name="previous" options={{ title: 'Previous' }} />
    </Stack>
  );
}

export default ProfileLayout;


