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

       
    }

    return {
        previousRuns,
        setPreviousRuns,
        renderPreviousRuns
    }
}
  
