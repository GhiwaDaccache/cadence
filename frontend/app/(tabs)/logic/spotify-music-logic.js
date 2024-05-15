// // Dependencies
// import { useEffect, useState } from "react";
// import { getValueFor } from "../../../tools/secureStore";
// import { useLocationLogic } from "../profile/logic/location-logic";
// import { convertToPace } from "../../../tools/utils/convertSpeed";
// import { getTempo } from "../../../tools/utils/getTempo";
// import { useMusicLogic } from "./music-player-logic";

// export const useSpotifyMusicLogic = () => {
//     const { location } = useLocationLogic()
//     const { playSound } = useMusicLogic()
//     const getRecommendations = () =>{

//         const currentPace = convertToPace(location.speed)
//         const currentTempo = getTempo(currentPace)

//         const getTokens = async () => {
//             const token = await getValueFor('token')
//             const spotifyToken = await getValueFor('spotify-token')
//             return [token, spotifyToken]
//         }
        
//         const recommendations = `min_tempo=${currentTempo[0]}&max_tempo=${currentTempo[1]}`

        
//         getTokens().then(token => {
//             if (token[1]) {
//                 fetch(`https://api.spotify.com/v1/recommendations?limit=1&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&${recommendations}`, {
//                     method: "GET", 
//                     headers: {
//                         Authorization: `Bearer ${token[1]}`,
//                     }
//                 })
//                 .then(response => {
//                     if (!response.ok) {
//                         console.log(response)
//                         throw new Error("Failed to get songs")
//                     }
//                     return response.json(); 
//                 })
//                 .then(data => {
//                     const dataTrack = {
//                         'context_uri': data.tracks[0].uri
//                     };
                    
//                     fetch("https://api.spotify.com/v1/me/player/play?device_id=425d882af17f4f94d09209e227264c899a7172dd", {
//                         method: 'PUT',
//                         headers: {
//                         'Authorization': `Bearer ${accessToken}`,
//                         'Content-Type': 'application/json'
//                         },
//                         body: JSON.stringify(dataTrack)
//                     })
//                     .then(response => {
//                         if (!response.ok) {
//                             throw new Error('Network response was not ok. Status: ' + response.status);
//                         }
//                     return response.json();
//                     })
//                     .then(data => {
//                         console.log(data)
//                         console.log('Success:', data);
//                     })
//                     .catch(error => {
//                         console.error('Error:', error);
//                     });

//                     console.log('Playing Sound');
                                       
//                 })
//                 .catch(error => {
//                     console.log(error);
//                 })
//             }
//         });
        
//     }

//     const fetchMusicByTempo = () =>{
//         // getRecommendations()
//     }

//     const checkUserPace = () =>{
//         setInterval(fetchMusicByTempo, 60000)
//     }

//       return{
//         checkUserPace
//       }
//     }