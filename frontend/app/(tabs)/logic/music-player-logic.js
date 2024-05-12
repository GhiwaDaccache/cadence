import { useState } from "react";

export const useMusicLogic = () => {

    const getSpotifyToken = async () =>{
        try{
            const response = await fetch("http://192.168.1.6:8000/cadence/api/spotify/create_spotify_token",{
                method: "POST"
            })
            const json = await response.json()
        if (json.access_toke) {
            save('spotify-token', json.access_token)
        }}
        catch(error){
            console.log(error)
        }
    }

    
    
    return {

    };
};

