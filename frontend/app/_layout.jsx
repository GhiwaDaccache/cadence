// Dpendencies
import { useEffect } from "react";
import { useFonts } from 'expo-font';
import { Stack, SplashScreen } from "expo-router";


SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Urbanist-light': require('../assets/fonts/Urbanist-Light.ttf'),
    'Urbanist-regular': require('../assets/fonts/Urbanist-Regular.ttf'),
    'Urbanist-medium': require('../assets/fonts/Urbanist-Medium.ttf'),
    'Urbanist-semi-b': require('../assets/fonts/Urbanist-SemiBold.ttf'),
    'Urbanist-bold': require('../assets/fonts/Urbanist-Bold.ttf'), 
  });

  useEffect(() =>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}} />
      <Stack.Screen name="(auth)" options={{ headerShown: false}} />
    </Stack>
  );
}

export default RootLayout;


