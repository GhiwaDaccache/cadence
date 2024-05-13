import { Text, View } from "react-native";
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
    const [isloading, setIsLoading] = useState(true)
    const [playlist, setPlaylist] = useState(null)
    const { id } = useLocalSearchParams()
    const [spotifyToken, setSpotifyToken] = useState(null)

    useEffect(() => {
        const getTokens = async () => {
            const token = await getValueFor('token')
            const spotifyToken = await getValueFor('spotify-token')
            return [token, spotifyToken]
        }
        
        getTokens().then(token => {
            if (token[0]) {
                fetch(`http://192.168.232.108:8000/cadence/api/playlist/${id}/`, {
                    method: "GET", 
                    headers: {
                        Authorization: `Bearer ${token[0]}`,
                    }
                })
                .then(response => {
                    if (!response.message === 'Success.') {
                        throw new Error("Failed to load playlist");
                    }
                    return response.json();
                })
                .then(data => {
                    setSpotifyToken(token[1])
                    setPlaylist(data.data)
                })
                .catch(error => {
                    setPlaylist([]);
                })
            }
        })
    }, [])

    useEffect(() => {
        if (playlist) {
            setIsLoading(false)
            const spotifyIds = playlist.songs.map(song => song.spotify_id).join(',')
            fetch(`https://api.spotify.com/v1/tracks/?ids${spotifyIds}`, {
                method: "GET", 
                headers: {
                    Authorization: `Bearer ${spotifyToken}`,
                }
            })
            .then(response => {
                if (!tracks) {
                    throw new Error("Failed to get songs");
                }
                return response.json();
            })
            .then(data => {
                setPlaylistTracks(data.tracks)
            })
            .catch(error => {
                setPlaylistTracks([]);
            })
        }
    }, [playlist]);

    const renderPlaylist = () => {
        if (isloading) {
          return <Text className='font-urbanist self-center text-base pt-12'>Loading playlists...</Text>;
        } else {
          return (
            <PlaylistCard
                    imageSize={'w-32 h-32'}
                    titleSize={'text-xl'}
                    title={playlist.name}
                    image={images.playlist}
                    level={playlist.level}
                    time={'20:18'}
                />
          );
        }
      };

    

    return (
        <View className='h-full bg-white px-7'>
            <View>
                {renderPlaylist()}
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


