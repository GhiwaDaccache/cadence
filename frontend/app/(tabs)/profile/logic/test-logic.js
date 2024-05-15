import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { Button } from 'react-native';
import { getValueFor, save } from '../../../../tools/secureStore';
WebBrowser.maybeCompleteAuthSession();

// Endpoint
const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function AppH() {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '220bc6fbfe2c4df28c4bad2b9095b391',
      scopes: ['user-read-email', 
                'playlist-modify-public',
                'user-library-read',
                'user-read-playback-state',
                'user-modify-playback-state',
                'user-read-currently-playing',
                'user-read-private',
                'user-read-playback-position',
                'app-remote-control',
                'streaming',
                'playlist-read-private',
                'playlist-read-collaborative',
                'playlist-modify-private',
                'playlist-modify-public',
                'user-library-modify',
            ],
      // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: makeRedirectUri({
        scheme: 'cadence'
      }),
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
        const getAuthorization = async () =>{
            await save('authorization-code', response.params.code)
        }
        getAuthorization()
        console.log(response.params.code)
      const { code } = response.params;
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login SPOTIFY"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}

