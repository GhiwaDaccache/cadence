import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";


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

    const router = useRouter();
    const { id } = useLocalSearchParams();

    console.log(id)
    const selectedPlaylist = playlists.find((item) => { return item.id == id })
    return (
        <View>{selectedPlaylist.name}</View>

    )
};