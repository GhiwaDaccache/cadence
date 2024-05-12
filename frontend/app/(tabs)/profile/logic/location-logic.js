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
          async (locationa) => {
            console.log("Received location update:", locationa); // Log location updates
            setLocation(prevLocation => ({
                ...prevLocation,
                latitude: locationa.coords.latitude,
                longitude: locationa.coords.longitude,
            }));
            console.log("LOCCCCCC:", location);
            
          }
        )
      })()}, [])
    return {
    }
}
