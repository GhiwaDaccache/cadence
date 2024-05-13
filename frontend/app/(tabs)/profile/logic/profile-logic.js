// Dependencies
import { useEffect, useState } from "react";

// Tools
import { getValueFor } from '../../../../tools/secureStore';

export const useProfileLogic = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const getToken = async () => {
            const token = await getValueFor('token');
            return token;
        }

        getToken().then(token => {
            if (token) {
                fetch("http://192.168.232.108:8000/cadence/api/favorite_playlist/", {
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
                    setPlaylists(data.data);
                })
                .catch(error => {
                    console.log(error);
                    setPlaylists([]);
                })
            }
        })
    }, [])

    return {
        playlists
    }
}
