import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

export const useMusicLogic = () => {
  const [sound, setSound] = useState({});

  const playSound = () => {
    console.log('test')
    }
//     console.log('Loading Sound');
//     await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
//     const { sound: playbackObject } = await Audio.Sound.createAsync(
//         { uri: 'https://api.spotify.com/v1/tracks/1JGWAEOOPv8LyKh92eVa39' },
//         { shouldPlay: true }
//       );
//     setSound({sound: playbackObject});

//     console.log('Playing Sound');
//     await sound.playAsync();
//   }

//   useEffect(() => {
//     return sound
//       ? () => {
//           console.log('Unloading Sound');
//         //   sound.unloadAsync();
//         }
//       : undefined;
//   }, [sound]);

  return{
    playSound
    }
  
}