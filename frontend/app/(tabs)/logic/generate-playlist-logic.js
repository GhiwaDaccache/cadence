// Dependencies
import { useState } from "react";
import { getValueFor } from "../../../tools/secureStore";


export const useGeneratePlaylistLogic = () => {
  const [intervals, setIntervals] = useState([{'time': 0, 'pace': 0}, {'time': 0, 'pace': 0}, {'time': 0, 'pace': 0}]);

   
    // useEffect(() => {
    //     const getTokens = async () => {
    //         const token = await getValueFor('token')
    //         const spotifyToken = await getValueFor('spotify-token')
    //         return [token, spotifyToken]
    //     }
        
    //     getTokens().then(token => {
    //         if (token[1]) {
    //             fetch(`https://api.spotify.com/v1/recommendations?${recommendations}`, {
    //                 method: "GET", 
    //                 headers: {
    //                     Authorization: `Bearer ${token[1]}`,
    //                 }
    //             })
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error("Failed to get songs")
    //                 }
    //                 console.log(response.json())
    //                 return response.json()
    //             })
    //             .catch(error => {
    //                 setPlaylistTracks([])
    //             })
    //         }
    //     })
    // }, [])


    return {
        intervals,
        setIntervals
    }
}
