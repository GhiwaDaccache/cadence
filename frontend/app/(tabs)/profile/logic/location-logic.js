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
            timeInterval: 3500,
            activityType: Location.ActivityType.Fitness
          },
          async (locationUpdate) => {
            setLocation({
                latitude: locationUpdate.coords.latitude,
                longitude: locationUpdate.coords.longitude,
                speed: locationUpdate.coords.speed,
            });
          }
        )
      })()}, [])

      useEffect(()=>{
        console.log('location: ', location)
      }, [location])

    return {
      location
    }
}
