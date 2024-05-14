import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';
import { getValueFor } from '../../../../tools/secureStore';

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
        const accessToken = await getValueFor('spotify-token')
        // const { sound } = await Audio.Sound.createAsync(
        //     { uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3' },
        //     { shouldPlay: true },
        //     onPlayBackStatusUpdate
        //   );

        const data = {
            context_uri:"spotify:album:5ht7ItJgpBH7W6vJ5BqpPr"
          };

          fetch("https://api.spotify.com/v1/me/player/play?device_id=425d882af17f4f94d09209e227264c899a7172dd", {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          })
          .then(response => {
            if (!response.ok) {
                console.log(accessToken)
                throw new Error('Network response was not ok. Status: ' + response.status);
            }
            return response.json();
          })
          .then(data => {
            console.log('Success:', data);
          })
          .catch(error => {
            console.error('Error:', error);
          });

        // const resp = await
        //   fetch(`https://api.spotify.com/v1/me/player/play?device_id=425d882af17f4f94d09209e227264c899a7172dd`, {
        //             method: "PUT", 
        //             headers: {
        //                 Authorization: `Bearer ${spotifyToken}`,
        //             },
        //             body: {
        //                 "uris": ["spotify:track:4iV5W9uYEdYUVa79Axb7Rh", "spotify:track:1301WleyT98MSxVHPZCA6M"],
        //                 "position_ms": 0
        //             }
        //         });
                // .then(response => {
                //     console.log(response.json())
                // })


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



