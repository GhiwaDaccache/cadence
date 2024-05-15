// Dependencies
import { useEffect, useState } from "react";
import { getValueFor } from "../../../tools/secureStore";
import { TouchableOpacity } from "react-native";
import GenreCard from "../../../components/GenreCard";
import { getTempo } from "../../../tools/utils/getTempo"

export const useGeneratePlaylistLogic = () => {
    const [selectedGenre, setSelectedGenre] = useState(null);
    const genres = {"genres": ["alternative", "samba", "acoustic", "french", "pop", "rock", "work-out", "hip-hop"]}
    const [firstInterval, setFirstInterval] = useState({'time': 0, 'pace': 0})
    const [secondInterval, setSecondInterval] = useState({'time': 0, 'pace': 0})
    const [thirdInterval, setThirdInterval] = useState({'time': 0, 'pace': 0})

    const renderGenreCard = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedGenre(item)}>
          <GenreCard
            genre={item}
            selectedGenre={selectedGenre}
          />
        </TouchableOpacity>
      )

    useEffect(()=>{
        console.log("1 ", firstInterval)
        console.log("2 ",secondInterval)
        console.log("3 ",thirdInterval)
        console.log(selectedGenre)
    }, [firstInterval, secondInterval, thirdInterval, selectedGenre])

    const handleGenerate = () =>{
        getRecommendations(firstInterval.time, firstInterval.pace)
        getRecommendations(secondInterval.time, secondInterval.pace)
        getRecommendations(thirdInterval.time, thirdInterval.pace)
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
                        throw new Error("Failed to get songs")
                    }
                    return response.json(); 
                })
                .then(data => {
                    const playlist = {
                        "name": "My Playlist",
                        "level": "beginner",
                        "songs": [
                        ]
                      }
                      for (let i = 0; i < data.tracks.length; i++) {
                        playlist.songs.push({ 'name': data.tracks[i].name, 'spotify_id': data.tracks[i].id });
                    }

                    console.log(JSON.stringify(playlist))
                    fetch("http://192.168.232.108:8000/cadence/api/playlist/", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*",
                            Authorization: `Bearer ${token[0]}`
                        },
                        body: JSON.stringify(playlist),
                    }).then(resp => {
                        console.log(resp)
                    })
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
