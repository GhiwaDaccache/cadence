// Dependencies
import * as Location from 'expo-location';
import { useEffect, useState } from "react";

export const useLocationLogic = () => {
    const [location, setLocation] = useState({});
    const [errorMessage, setErrorMessage] = useState(null);
    let foregroundSubscription = null;
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMessage('Permission to access location was denied')
          return
        }
        foregroundSubscription?.remove()
        foregroundSubscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.BestForNavigation,
            timeInterval: 1500
          },
          async (location_update) => {
            console.log("Received location update:", location_update); 
            setLocation(prevLocation => ({
                ...prevLocation,
                latitude: location_update.coords.latitude,
                longitude: location_update.coords.longitude,
            }));
            console.log("LOCCCCCC:", location);
          }
        )
      })()}, [])
    return {
    }
}
