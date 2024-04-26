// Dependencies
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';


const App = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-urbanistBold'>Cadence</Text>
      <StatusBar style="auto" />
      <Link href='/discover' >Go to discover</Link>
    </View>
  );
}

export default App;




