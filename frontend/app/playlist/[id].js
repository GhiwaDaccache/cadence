import { FlatList, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PlaylistCard from "../../components/PlaylistCard";
import PrimaryButton from "../../components/PrimaryButton";
import images from '../../assets/images/images'; 
import { useState, useEffect } from "react";
import { getValueFor } from "../../tools/secureStore";
import SongCard from '../../components/SongCard'

export default function playlistDetails() {
    const [currentTrack, setCurrentTrack] = useState(null)
    const [playlistTracks, setPlaylistTracks] = useState([])
    const [playlist, setPlaylist] = useState([])
    const { id } = useLocalSearchParams();

    useEffect(() => {
        const getToken = async () => {
            const token = await getValueFor('token')
            return token;
        }
        
        getToken().then(token => {
            if (token) {
                fetch(`http://192.168.232.108:8000/cadence/api/playlist/${id}/`, {
                    method: "GET", 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(response => {
                    if (!response.message === 'Success.') {
                        throw new Error("Failed to load playlist");
                    }
                    return response.json();
                })
                .then(data => {
                    setPlaylist(data.data)
                })
                .catch(error => {
                    setPlaylist([]);
                })
            }
        })
    }, [])

    useEffect(()=>{
        const getPlaylistTracks = () =>{
            const spotifyIds = playlist.songs.map(song => song.spotify_id).join(',')
            return spotifyIds
        }
        getPlaylistTracks()
    }, [playlist])

    

    return (
        <View className='h-full bg-white px-7'>
            <View>
                <PlaylistCard
                    imageSize={'w-32 h-32'}
                    titleSize={'text-xl'}
                    title={playlist.name}
                    image={images.playlist}
                    level={playlist.level}
                    time={'20:18'}
                />
            </View>

            {/* <FlatList
                className='self-start pl-7'
                showsVerticalScrollIndicator={false}
                data={songs}
                renderItem={({ item }) => (
                <SongCard
                    image={images.playlist}
                    time={'20:12'}
                    level={item.playlist.level}
                    title={item.playlist.name}
                    handlePress={()=>{ 
                    router.push(`/playlist/${item.playlist.id}`)
                    }}
                />
                )}
                keyExtractor={(item) => item.playlist.id.toString()}
                /> */}

            <View className='absolute self-center top-[540]'>
                <PrimaryButton
                // handlePress={playSpotify}
                title={'Start'}
                width={'w-[170]'}
                />
            </View>
        </View>

    )
}

// {
//     "message": "Success.",
//     "data": [
//         {
//             "playlist": {
//                 "id": 1,
//                 "name": "Playlist 1",
//                 "level": "beginner"
//             },
//             "songs": [
//                 {
//                     "id": 1,
//                     "name": "Song",
//                     "playlist": 1,
//                     "spotify_id": "1JGWAEOOPv8LyKh92eVa39"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Song 2",
//                     "playlist": 1,
//                     "spotify_id": "0OpcI3rARLsNWgVbPdwHD9"
//                 },
//                 {
//                     "id": 4,
//                     "name": "song 3",
//                     "playlist": 1,
//                     "spotify_id": "4gbVRS8gloEluzf0GzDOFc"
//                 },
//                 {
//                     "id": 5,
//                     "name": "song 4",
//                     "playlist": 1,
//                     "spotify_id": "2qpboKYzz14TeOY7HzQdaF"
//                 },
//                 {
//                     "id": 6,
//                     "name": "song 5",
//                     "playlist": 1,
//                     "spotify_id": "40FUdLENDY3sZmHEM25lpE"
//                 }
//             ]
//         }
//     ]
// }