import { useState } from "react";
import { save } from "../../../tools/secureStore";

export const useMusicLogic = () => {
    const [currentTrack, setCurrentTrack] = useState(null)
    const [savedSongs, setSavedSongs] = useState([])

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

    const saveSong = async () =>{
        const response = await fetch(
            "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl",
            {
              headers: {
                Authorization: `Bearer ${spotify-token}`,
              }
            }
          );
          if (!response.ok) {
            throw new Error("failed to fetch the tracks");
          }
          const data = await response.json();
          setSavedTracks(data.items);
        }

    const playTrack = async () =>{
        if (savedTracks.length > 0) {
            setCurrentTrack(savedTracks[0])
        }
        await play(savedTracks[0])
    }
    


    
    return {

    };
};


