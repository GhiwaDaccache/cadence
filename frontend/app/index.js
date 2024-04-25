// Dependencies
import { useEffect } from "react";
import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';
import { Link, SplashScreen } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";

// Styles
import { Urbanist_400Regular, Urbanist_300Light, Urbanist_600SemiBold, Urbanist_700Bold } from '@expo-google-fonts/urbanist'; 

SplashScreen.preventAutoHideAsync();

const App = () => {
   const [fontsLoaded, error] = useFonts({
    Urbanist_300Light,
    Urbanist_400Regular,
    Urbanist_600SemiBold,
    Urbanist_700Bold
  });

  useEffect(() =>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

  if(!fontsLoaded && !error) return null;


  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl'>Cadence</Text>
      <Link href='/profile' >Go to profile</Link>
    </View>
  );
}

export default App;




