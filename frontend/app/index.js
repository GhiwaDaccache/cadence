// Dependencies
import { useEffect } from "react";
import { useFonts } from 'expo-font';
import { Link, SplashScreen } from 'expo-router';
import { StatusBar, View, Text } from 'react-native';

// Styles
import { appStyles } from './styles';
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
    <View style={appStyles.container}>
      <Text style={appStyles.defaultText}>Cadence</Text>
      <StatusBar style='auto' />
      <Link href='/profile' style={appStyles.defaultText}>Go to profile</Link>
    </View>
  );
}

export default App;




