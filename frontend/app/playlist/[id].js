import { Text, View , FlatList, Image } from "react-native";
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
                    setIsLoading(false)

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
            fetch(`https://api.spotify.com/v1/tracks/?ids=${spotifyIds}`, {
                method: "GET", 
                headers: {
                    Authorization: `Bearer ${spotifyToken}`,
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to get songs")
                }
                return response.json()
            })
            .then(data => {
                if (!data.tracks) {
                    throw new Error("Invalid response format: missing 'tracks' property")
                }
                setPlaylistTracks(data.tracks)
            })
            .catch(error => {
                setPlaylistTracks([])
            })
        }
    }, [playlist]);

    const renderPlaylist = () => {
        if (isloading) {
          return <Text className='font-urbanist self-center text-base pt-12'>Loading playlist...</Text>;
        } else {
            if(playlist){
                return (
                    <PlaylistCard
                            imageSize={'w-32 h-32'}
                            titleSize={'text-xl'}
                            title={playlist.playlist.name}
                            image={images.playlist}
                            level={playlist.playlist.level}
                            time={'20:18'}
                        />
                )
        }
        }
      }

      const renderSongs = () => {
        if (isloading) {
          return <Text className='font-urbanist self-center text-base pt-24'>Loading songs...</Text>;
        } else {
          return (
            <FlatList
              className='self-start'
              showsVerticalScrollIndicator={false}
              data={playlistTracks}
              renderItem={({ item }) => (
                <SongCard
                artistName={item.artists[0].name}
                image={item.album.images[0].url}
                songName={item.name}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          )
        }
      }


    return (
        <View className='h-full bg-white px-7'>
            <View>
                {renderPlaylist()}
            </View>

            {renderSongs()}

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


