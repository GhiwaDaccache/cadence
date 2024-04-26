// Dependencies
import { View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Assets
import images from '../assets/images/images'; 
import Logo from '../assets/images/logo';

// Components
import Button from '../components/Button';

const App = () => {
  return (
    <SafeAreaView className='h-full flex flex-row justify-center items-end'>
        <Image source={images.landingBg} className='h-full'/>
        <View className='w-[60]'></View>
        <View className='absolute top-24 left-8'>
          <Logo width={65} height={81}   />
        </View>
        <View className='absolute bottom-0 w-full'>
          <Button
            title='Log in'
            color='bg-primary'
            width='w-[50%]'
            textColor='text-white'

            handlePress={() => {}}
          />
        </View>
    </SafeAreaView>
  );
}

export default App;



