// Dependencies
import { router } from 'expo-router';
import { View, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Assets
import Logo from '../assets/images/Logo';
import images from '../assets/images/images'; 

// Components
import PrimaryButton from '../components/PrimaryButton';

const App = () => {
  return (
    <SafeAreaView className='h-full flex flex-row justify-center items-end'>
        <Image source={images.landingBg} className='h-full'/>
        <View className='w-16'></View>
        <View className='absolute top-24 left-8'>
          <Logo width={65} height={81}   />
        </View>
        <View className='absolute bottom-0 w-full flex flex-row justify-center'>

          <PrimaryButton
            title='Login'           
            width='w-[50%]'
            handlePress={() => router.push('/login')}
            rounded={false}

          />
          <View className='h-full w-px bg-white'></View>

          <PrimaryButton
            title='Sign Up'           
            width='w-[50%]'
            handlePress={() => router.push('/sign-up')}
            rounded={false}
          />

        </View>
      <StatusBar backgroundColor='#FBFBFD'/>
    </SafeAreaView>
  );
}

export default App;



