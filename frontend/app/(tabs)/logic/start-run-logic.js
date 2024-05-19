import { useState } from "react";
import { getValueFor } from '../../../tools/secureStore';

export const useStartRunLogic = () => {
    const [isRunning, setIsRunning] = useState(false)
    const [runData, setRunData] = useState({
        start_time: null,
        end_time: null,
        real_distance: 0,
        real_duration: 0,
        real_pace: 0,
        recorded_on: null
      })
   
    const handleStartStop = () => {
        if (isRunning) {
            const endTime = new Date().toLocaleDateString()
            const totalTime = endTime - runData.startTime
            const averagePace = calculateAveragePace(runData.distance, totalTime)

            setRunData({ ...runData, endTime, totalTime, averagePace })
            sendRun(runData)
          } else {
            setRunData({ ...runData, start_time: new Date().toLocaleDateString(), end_time: new Date().toLocaleDateString(), real_distance: 0, real_duration: 0, real_pace: 0, recorded_on: new Date().toLocaleDateString() })
          }
          setIsRunning(!isRunning)
    }

    const calculateAveragePace = (distance, totalTime) => {
        return totalTime / distance
      }

      const sendRun = () =>{
        const getToken = async () => {
            const token = await getValueFor('token')
        return token
        }

        getToken().then(token => {
            console.log(runData)
            if (token) {
                fetch("http://192.168.51.108:8000/cadence/api/recorded_run/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(runData),
                }).then(response => {
                    if (response.message !== 'Run added successfully') {
                        throw new Error("Failed to add run");
                    }
                    return response.json();
                })
            }
        })
    }

    return {
        isRunning,
        handleStartStop,
    }
}