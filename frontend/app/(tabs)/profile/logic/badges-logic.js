// Dependencies
import { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";

// Components
import Badge from "../../../../components/Badge";

// Assets
import icons from "../../../../assets/icons/icons";

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
                fetch("http://http://192.168.1.6:8000/cadence/api/earned_badge/", {
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
    }, [badges])

    const getBadgeIcon = (title) => {
        switch (title) {
            case "Early Bird":
                return icons.sunrise

            case "First Run":
                return icons.trophy

            case "Longest Duration":
                return icons.timer

            case "Longest Distance":
                return icons.distance

            default:
                return null
        }
    }

    const converTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
        const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
        return `${hoursString}:${minutesString}`;
    }

    const renderBadges = () =>{
        if (isloading) {
            return <Text className='font-urbanist self-center text-base pt-12'>Loading badges...</Text>;
        } else if (badges.length == 0) {
            return <Text Text className='font-urbanist self-center text-base pt-12'>No badges yet</Text>;
          } else {
            return (
                <FlatList 
                    data = {badges}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item})=> (
                        <Badge
                        icon={getBadgeIcon(item.badge_name)}
                        title={item.badge_name}
                        date={item.recorded_run.recorded_on}
                        time={converTime(item.recorded_run.real_duration)}
                        distance={item.recorded_run.real_distance}
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
  
