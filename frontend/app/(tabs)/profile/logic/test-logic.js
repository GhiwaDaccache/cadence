import React from "react";

export const useTestLogic = () => {
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
            ]

        }
    }
    return{
        
        }
}