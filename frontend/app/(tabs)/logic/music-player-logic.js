import { useState } from "react";

export const useMusicLogic = () => {

    const getSpotifyToken = async () =>{
        try{
            const response = await fetch("http://192.168.232.108:8000/cadence/api/spotify/create_spotify_token")
        }
        catch(error){}
    }
    
    return {

    };
};
