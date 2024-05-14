import React from 'react';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';


export const useTestLogic = () => {

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
    const authenticate = async () =>{
        const config = {
            issuer: 'https://accounts.spotify.com',
            clientId: '220bc6fbfe2c4df28c4bad2b9095b391',
            scopes: [
                'user-read-email',
                'user-library-read',
                'user-read-playback-state',
                'user-modify-playback-state',
                'user-read-currently-playing',
                'user-read-private'
            ],
        redirectUrl: 'https://www.google.com/'
        }
        const result = await AppAuth.authAsync(config)
        console.log(result)
    }

    return{
        
        }
}