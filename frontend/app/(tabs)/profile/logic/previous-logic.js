// Dependencies
import { useEffect, useState } from "react";
import Run from "../../../../components/Run";
import { Text, FlatList } from "react-native";
import { getValueFor } from '../../../../tools/secureStore';

export const usePrviousLogic = () => {
    const [previousRuns, setPreviousRuns] = useState([]);

    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {   
        const getToken = async () => {
            const token = await getValueFor('token')
            return token;
        }

        getToken().then(token => {
            console.log('token: ', token)
            
            if (token) {
                fetch("http://192.168.232.108:8000/cadence/api/recorded_run/", {
                    method: "GET", 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(response => {
                    console.log("success response: ", response)

                    if (response.message) {
                        throw new Error("Failed to load runs");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('data: ', data)

                    setPreviousRuns(data)
                })
                .catch(error => {
                    console.log(error);

                    setPreviousRuns([]);
                })
            }
        })
    }, []);

    
    }

    return {
        previousRuns,
        setPreviousRuns,
        renderPreviousRuns
    }
}
  
