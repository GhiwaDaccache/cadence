import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

export const useMusicLogic = () => {
//   const [sound, setSound] = useState({});

    const onPlayBackStatusUpdate = (status) =>
        {
            console.log(status)
        }
  async function playSound() {
    try{ 
        console.log('Loading Sound');
        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

        const { sound } = await Audio.Sound.createAsync(
            { uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3' },
            { shouldPlay: true },
            onPlayBackStatusUpdate
          );

        // const sound = new Audio.Sound()
        // console.log('Sound ');
        // await sound.loadAsync(
        //     {uri: "https://open.spotify.com/track/11dFghVXANMlKmJXsNCbNl"},
        //     { shouldPlay: true }
        // )

        
        // await sound.playAsync()

        // setSound({ sound: playbackObject });

        console.log('Playing Sound');
        // await sound.playAsync();
    }
    catch(err){
       // handle rejection
       console.error(err)
    }
    
  }

  useEffect(() => {
    playSound;
  }, []);

//   useEffect(() => {
//     return sound
//       ? () => {
//           console.log('Unloading Sound');
//           sound.unloadAsync();
//         }
//       : undefined;
//   }, [sound]);


  return{
    playSound
    }
  
}



