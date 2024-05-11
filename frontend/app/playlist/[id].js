import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PlaylistCard from "../../components/PlaylistCard";
import PrimaryButton from "../../components/PrimaryButton";
import images from '../../assets/images/images'; 
import { useState } from "react";



export default function playlistDetails() {
    const [currentTrack, setCurrentTrack] = useState(null)
    const [playlistTracks, setPlaylistTracks] = useState([])

    // const getPlaylistTracks = async () =>{
    //     const accesToken = await 
    // }

    // const playSpotify = async () =>{
    //     console.log('music playing')
    // }

    const playlists = {
        "message": "Success",
        "data": [
            {
                "playlist": {
                    "id": 1,
                    "name": "Playlist 1",
                    "level": "Beginner"
                },
                "songs": []
            },
            {
                "playlist": {
                    "id": 4,
                    "name": "Playlist 3",
                    "level": "Intermediate"
                },
                "songs": []
            },
            {
              "playlist": {
                  "id": 2,
                  "name": "Playlist 5",
                  "level": "Intermediate"
              },
              "songs": []
          }
        ]}

    const { id } = useLocalSearchParams();
    const selectedPlaylist = playlists.data.find((item) => { return item.playlist.id == id})

    return (
        <View className='h-full bg-white px-7'>
            <View>
                <PlaylistCard
                    imageSize={'w-32 h-32'}
                    titleSize={'text-xl'}
                    title={selectedPlaylist.playlist.name}
                    image={images.playlist}
                    level={selectedPlaylist.playlist.level}
                    time={'20:18'}
                />
            </View>

            <PrimaryButton
            handlePress={playSpotify}
            title={'Start'}
            width={'w-[170]'}
            />
        </View>

    )
};