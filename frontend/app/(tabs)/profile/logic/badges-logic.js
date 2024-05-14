// Dependencies
import { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";

// Components
import Run from "../../../../components/Run";
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
            return (
                <View >
                    <Badge
                        title={'First run'}
                        icon={icons.trophy}
                        data={[
                        "00-00-2000",
                        "00.00 km",
                        "00:00"
                        ]}
                    />

                    <Badge
                        title={'Early bird'}
                        icon={icons.sunrise}
                        data={[
                        "00-00-2000",
                        "00.00 km",
                        "00:00"
                        ]}
                    />

                    <Badge
                        title={'Longest distance'}
                        icon={icons.distance}
                        data={[
                        "00-00-2000",
                        "00.00 km",
                        "00:00"
                        ]}
                    />

                    <Badge
                        title={'Longest duration'}
                        icon={icons.timer}
                        data={[
                        "00-00-2000",
                        "00.00 km",
                        "00:00"
                        ]}
                    />

                </View>
            )
          } else {
            return (
                <FlatList 
                    data = {previousRuns}
                    keyExtractor={(item) => item.id}
                    renderItem={({item})=> (
                        <Run
                            date={item.recorded_on}
                            distance={item.real_distance}
                            pace={item.real_pace}
                            time={item.real_duration}
                  />
                )}
              />
            )
          }
    }

    return {
        badges,
        setBadges,
        renderBadges
    }
}
  
