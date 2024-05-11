import { useEffect, useState } from "react";
import * as Location from 'expo-location';

export const useProfileLogic = () => {
    const [location, setLocation] = useState(null);
    const [speed, setSpeed] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null);
    let foregroundSubscription = null;
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMessage('Permission to access location was denied')
          return
        }
       
          }
        )
      })()}, [])
    return {
    }
}
