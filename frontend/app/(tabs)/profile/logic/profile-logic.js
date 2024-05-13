// Dependencies
import { useEffect, useState } from "react";

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

    return {
        playlists, 
        isloading, 
        setIsLoading
    }
}
