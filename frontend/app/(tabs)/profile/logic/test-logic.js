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

console.log("SSSSSSSSSSSSSSSSSSSSSSSSSS")
console.log(makeRedirectUri({scheme: 'cadence'}))

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
        console.log(response)
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

// export const useTestLogic = () => {

    // const discovery = {
    //     authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    //     tokenEndpoint: 'https://accounts.spotify.com/api/token',
    //   };
      
    //   export default function App() {
    //     const [request, response, promptAsync] = useAuthRequest(
    //       {
    //         clientId: 'CLIENT_ID',
    //         scopes: ['user-read-email', 'playlist-modify-public'],
    //         // To follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
    //         // this must be set to false
    //         usePKCE: false,
    //         redirectUri: makeRedirectUri({
    //           scheme: 'your.app'
    //         }),
    //       },
    //       discovery
    //     );
      
    //     React.useEffect(() => {
    //       if (response?.type === 'success') {
    //         const { code } = response.params;
    //       }
    //     }, [response]);
      
    //     return (
    //       <Button
    //         disabled={!request}
    //         title="Login"
    //         onPress={() => {
    //           promptAsync();
    //         }}
    //       />
    //     );
    //   }
    // const authenticate = async () =>{
    //     var client_id = '220bc6fbfe2c4df28c4bad2b9095b391';
    //     var redirect_uri = 'http://localhost:8888/callback';
        
    //     // var express = require('express');
    //     var app = express();

    //     app.get('/login', function(req, res) {

    //     var state = generateRandomString(16);
    //     var scope = 'user-read-private user-read-email playlist-modify-public';

    //     res.redirect('https://accounts.spotify.com/authorize?' +
    //         querystring.stringify({
    //         response_type: 'code',
    //         client_id: client_id,
    //         scope: scope,
    //         redirect_uri: "https://www.google.com/",
    //         state: state
    //         }));
    //     });

    //     // const config = {
    //     //     issuer: 'https://accounts.spotify.com',
    //     //     clientId: '220bc6fbfe2c4df28c4bad2b9095b391',
    //     //     scopes: [
    //     //         'user-read-email',
    //     //         'user-library-read',
    //     //         'user-read-playback-state',
    //     //         'user-modify-playback-state',
    //     //         'user-read-currently-playing',
    //     //         'user-read-private'
    //     //     ],
    //     // redirectUrl: 'https://www.google.com/'
    //     // }
    //     // const result = await AppAuth.authAsync(config)
    //     // console.log(result)
    // }

    // return{
    //     authenticate
    //     }
// }