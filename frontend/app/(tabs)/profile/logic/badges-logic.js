// Dependencies
import { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";

// Components
import Badge from "../../../../components/Badge";

// Tools
import { getValueFor } from '../../../../tools/secureStore';

export const useBadgeLogic = () => {
    const [badges, setBadges] = useState([]);
    const [isloading, setIsLoading] = useState(true);
    
    useEffect(() => {   
        const getToken = async () => {
            const token = await getValueFor('token')
            return token;
        }

        getToken().then(token => {
            if (token) {
                fetch("http://192.168.232.108:8000/cadence/api/earned_badge/", {
                    method: "GET", 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(response => {
                    if (response.message) {
                        throw new Error("Failed to load badges");
                    }
                    return response.json();
                })
                .then(data => {
                    setBadges(data.data)
                })
                .catch(error => {
                    setBadges([]);
                })
            }
        })
    }, []);

    useEffect(() => {
        if (badges.length > 0) {
            setIsLoading(false);
        }
    }, [badges]);

    const renderBadges = () =>{
        if (isloading) {
            return <Text className='font-urbanist self-center text-base pt-12'>Loading badges...</Text>;
        } else if (badges.length == 0) {
            return <Text Text className='font-urbanist self-center text-base pt-12'>No badges yet</Text>;
          } else {
            return (
                <FlatList 
                    data = {badges}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=> (
                        <Badge

                        />
                )}
              />)
        }
    }

    return {
        badges,
        setBadges,
        renderBadges
    }
}
  
