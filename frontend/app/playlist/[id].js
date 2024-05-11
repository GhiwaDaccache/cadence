import { View, Text,  } from "react-native";
import { useLocalSearchParams } from "expo-router";
import PlaylistCard from "../../components/PlaylistCard";
import images from '../../assets/images/images'; 


export default function playlistDetails() {

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
        <View className='h-full bg-white'>
            <View className='self-center'>
                <PlaylistCard
                    title={selectedPlaylist.playlist.name}
                    image={images.playlist}
                    level={selectedPlaylist.playlist.level}
                    time={'20:18'}
                />
            </View>
        </View>

    )
};