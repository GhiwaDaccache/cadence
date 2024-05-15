// Dependencies
import { useEffect, useState } from "react";
import { getValueFor } from "../../../tools/secureStore";
import { TouchableOpacity } from "react-native";
import GenreCard from "../../../components/GenreCard";

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
    }, [firstInterval, secondInterval, thirdInterval])

   
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
        firstInterval,
        setFirstInterval,
        secondInterval,
        setSecondInterval,
        thirdInterval,
        setThirdInterval,
        genres,
        renderGenreCard
    }
}
