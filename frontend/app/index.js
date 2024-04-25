import { useEffect } from "react";
import { Redirect, Link, SplashScreen  } from 'expo-router';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import { Urbanist_400Regular, Urbanist_300Light, Urbanist_600SemiBold, Urbanist_700Bold } from '@expo-google-fonts/urbanist'; 
import { appStyles } from './styles';
import { useFonts } from 'expo-font';

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




