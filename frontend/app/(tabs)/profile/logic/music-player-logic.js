// Dependencies
import { Audio } from 'expo-av';
import { useEffect } from 'react';

// Tools
import { getValueFor } from '../../../../tools/secureStore';

export const useMusicLogic = () => {

  async function playSound() {
    try{ 
        console.log('Loading Sound');
        await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
        const accessToken = await getValueFor('spotify-token')

        const data = {
          'context_uri':  "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr"
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

        console.log('Playing Sound');
    }
    catch(err){
       console.error(err)
    }
    
  }

  useEffect(() => {
    playSound;
  }, []);




  return{
    playSound
    }
  
}



