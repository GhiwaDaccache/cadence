// Dependencies
import { router } from 'expo-router';
import { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";

// Components
import PlaylistCard from '../../../../components/PlaylistCard';

// Assets
import images from '../../../../assets/images/images'; 

// Tools
import { getValueFor } from '../../../../tools/secureStore';


export const useProfileLogic = () => {
    const [playlists, setPlaylists] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {

        const getToken = async () => {
            const token = await getValueFor('token')
            return token;
        }

        getToken().then(token => {
            console.log('token: ', token)
            if (token) {
                fetch("http://192.168.232.108:8000/cadence/api/favorite_playlist/", {
                    method: "GET", 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(response => {
                    console.log("success response: ", response)

                    if (!response.message === 'Success') {
                        throw new Error("Failed to load playlists");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('data: ', data)
                    setPlaylists(data.data)
                })
                .catch(error => {
                    console.log(error);
                    setPlaylists([]);
                })
            }
        })
    }, [])

    useEffect(() => {
        if (playlists.length > 0) {
            setIsLoading(false);
        }
    }, [playlists]);

    const renderPlaylists = () => {
        if (isloading) {
          return <Text className='font-urbanist self-center text-base pt-12'>Loading playlists...</Text>;
        } else if (playlists.length == 0) {
          return <Text Text className='font-urbanist self-center text-base pt-12'>No playlists available</Text>;
        } else {
          return (
            <FlatList
              className='self-start pl-7'
              showsVerticalScrollIndicator={false}
              data={playlists}
              renderItem={({ item }) => (
                <PlaylistCard
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
            />
          );
        }
      };
    

    return {
        renderPlaylists
    }
}