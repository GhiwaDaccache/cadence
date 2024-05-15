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
    const [user, setUser] = useState({'first-name': '', 'last-name': '', 'profile_photo': 'images.profile'});
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {

        const getToken = async () => {
            const token = await getValueFor('token')
            return token;
        }
        

        getToken().then(token => {
            if (token) {
                fetch("http://192.168.232.108:8000/cadence/api/favorite_playlist", {
                    method: "GET", 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(response => {
                    if (!response.message === 'Success') {
                        throw new Error("Failed to load playlists");
                    }
                    return response.json();
                })
                .then(data => {
                    setPlaylists(data.data)
                })
                .catch(error => {
                    setPlaylists([]);
                })
            }
        })

        getToken().then(token => {
          if (token) {
            fetch("http://192.168.232.108:8000/cadence/api/user/", {
                method: "GET", 
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(response => {
                if (response.message) {
                    throw new Error("Failed to get user")
                }
                return response.json();
            })
            .then(data => {
                setUser({
                  'first-name': data.user.first_name,
                  'last-name': data.user.last_name,
                  'profile_photo': `../../../../../backend/cadence/media/profile_images/${data.profile_photo_name}`
                })
            })
            .catch(error => {
                setUser({});
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
                  image={images[item.playlist.image]}
                  time={'20:12'}
                  level={item.playlist.level}
                  title={item.playlist.name}
                  imageSize={'w-24 h-24'}
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
        renderPlaylists,
        user
    }
}


