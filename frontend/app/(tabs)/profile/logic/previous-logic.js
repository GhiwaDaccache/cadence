// Dependencies
import { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";

// Components
import Run from "../../../../components/Run";

// Tools
import { getValueFor } from '../../../../tools/secureStore';
import { convertToMinutes } from "../../../../tools/utils/convertTime";

export const usePrviousLogic = () => {
    const [previousRuns, setPreviousRuns] = useState([]);

    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {   
        const getToken = async () => {
            const token = await getValueFor('token')
            return token;
        }

        getToken().then(token => {
            if (token) {
                fetch("http://192.168.51.108:8000/cadence/api/recorded_run/", {
                    method: "GET", 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(response => {
                    if (response.message) {
                        throw new Error("Failed to load runs");
                    }
                    return response.json();
                })
                .then(data => {
                    setPreviousRuns(data)
                })
                .catch(error => {
                    setPreviousRuns([]);
                })
            }
        })
    }, []);

    useEffect(() => {
        if (previousRuns.length > 0) {
            setIsLoading(false);
        }
    }, [previousRuns]);

    const renderPreviousRuns = () =>{
        if (isloading) {
            return <Text className='font-urbanist self-center text-base pt-12'>Loading runs...</Text>;
          } else if (previousRuns.length == 0) {
            return <Text Text className='font-urbanist self-center text-base pt-12'>No runs yet</Text>;
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
                            time={convertToMinutes(item.real_duration)}
                  />
                )}
              />
            )
          }
    }

    return {
        previousRuns,
        setPreviousRuns,
        renderPreviousRuns
    }
}
  
