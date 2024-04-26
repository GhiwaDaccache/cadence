// Dependencies
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Assets
import images from '../assets/images/images'; 
import Logo from '../assets/images/logo';

// Components
import PrimaryButton from '../components/PrimaryButton';

const App = () => {
  return (
    <SafeAreaView className='h-full flex flex-row justify-center items-end'>
        <Image source={images.landingBg} className='h-full'/>
        <View className='w-[60]'></View>
        <View className='absolute top-24 left-8'>
          <Logo width={65} height={81}   />
        </View>
        <View className='absolute bottom-0 w-full'>
          <PrimaryButton
            title='Log in'           
            width='w-[50%]'
            handlePress={() => {}}
          />
        </View>
    </SafeAreaView>
  );
}

export default App;



