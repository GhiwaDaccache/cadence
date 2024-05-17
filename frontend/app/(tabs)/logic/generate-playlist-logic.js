// Dependencies
import { useEffect, useState } from "react";
import { getValueFor } from "../../../tools/secureStore";
import { TouchableOpacity } from "react-native";
import GenreCard from "../../../components/GenreCard";
import { getTempo } from "../../../tools/utils/getTempo"
import { Alert } from "react-native";

export const useGeneratePlaylistLogic = () => {
    const [selectedGenre, setSelectedGenre] = useState(null);
    const genres = {"genres": ["alternative", "samba", "acoustic", "french", "pop", "rock", "work-out", "hip-hop"]}
    const [firstInterval, setFirstInterval] = useState({'time': 0, 'pace': 0})
    const [secondInterval, setSecondInterval] = useState({'time': 0, 'pace': 0})
    const [thirdInterval, setThirdInterval] = useState({'time': 0, 'pace': 0})
    const playlist = {"name": "My Playlist", "level": "beginner", "image": "A", "songs": []}

    const renderGenreCard = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedGenre(item)}>
          <GenreCard
            genre={item}
            selectedGenre={selectedGenre}
          />
        </TouchableOpacity>
      )

    const handleGenerate = () =>{
        getRecommendations(firstInterval.time, firstInterval.pace)
        getRecommendations(secondInterval.time, secondInterval.pace)
        getRecommendations(thirdInterval.time, thirdInterval.pace)
        addPlaylist()
    }

    const getRecommendations = (time, pace) =>{
        if (!selectedGenre) {
            return
        }
        const getTokens = async () => {
            const token = await getValueFor('token')
            const spotifyToken = await getValueFor('spotify-token')
            return [token, spotifyToken]
        }
        const duration = Math.floor(time * 60000 / 7)
        const duration_range = [duration-30000 , duration+30000]
        const tempo = getTempo(pace)
        

        const recommendations = `seed_genres=${selectedGenre}&min_duration_ms=${duration_range[0]}&max_duration_ms=${duration_range[1]}&min_tempo=${tempo[0]}&max_tempo=${tempo[1]}`
        
        getTokens().then(token => {
            if (token[1]) {
                fetch(`https://api.spotify.com/v1/recommendations?limit=7&seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_tracks=0c6xIDDpzE81m2q797ordA&${recommendations}`, {
                    method: "GET", 
                    headers: {
                        Authorization: `Bearer ${token[1]}`,
                    }
                })
                .then(response => {
                    if (!response.ok) {
                        console.log(response)
                        throw new Error("Failed to get songs")
                    }
                    return response.json(); 
                })
                .then(data => {
                    
                      for (let i = 0; i < data.tracks.length; i++) {
                        playlist.songs.push({ 'name': data.tracks[i].name, 'spotify_id': data.tracks[i].id });
                    }  

                })
                .catch(error => {
                    console.log(error);
                })
            }
        });
        
    }

    const addPlaylist = () =>{
        const getTokens = async () => {
            const token = await getValueFor('token')
            const spotifyToken = await getValueFor('spotify-token')
            return [token, spotifyToken]
        }
        
        getTokens().then(token => {
            if (token[0]) {
                fetch("http://http://192.168.51.108:8000/cadence/api/playlist/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                            Authorization: `Bearer ${token[0]}`
                        },
                        body: JSON.stringify(playlist),
                    }).then(resp => {
                        return resp.json()
                    }).then(data => {
                        const playlist_id = data.data.id
                        fetch("http://http://192.168.51.108:8000/cadence/api/favorite_playlist/", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                "Access-Control-Allow-Origin": "*",
                                Authorization: `Bearer ${token[0]}`
                            },
                            body: JSON.stringify({"playlist": playlist_id }),
                        })
                        Alert.alert("Cadence", "Playlist added to favorites!");


                    })
                .catch(error => {
                    console.log(error);
                })
            }
        });
        
    }

   



    return {
        firstInterval,
        setFirstInterval,
        secondInterval,
        setSecondInterval,
        thirdInterval,
        setThirdInterval,
        genres,
        renderGenreCard,
        handleGenerate
    }
}
