import { useState } from "react";


export const useStartRunLogic = () => {
    const [isRunning, setIsRunning] = useState(false);
   
    const handleStartStop = () => {
        setIsRunning(!isRunning)
    }

    return {
        isRunning,
        handleStartStop,
    }
}
