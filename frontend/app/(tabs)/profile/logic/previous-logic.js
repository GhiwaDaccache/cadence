import { useEffect, useState } from "react";

export const usePrviousLogic = () => {
    const [previousRuns, setPreviousRuns] = useState([])

    useEffect(() => {   
        setPreviousRuns = [
            {
                "id": 1,
                "recorded_on": "2024-05-02",
                "start_time": "12:02:35",
                "end_time": "12:07:35",
                "real_pace": 5.0,
                "real_distance": 5.0,
                "real_duration": "25:21",
                "user": 17,
                "run": null
            },
            {
                "id": 3,
                "recorded_on": "2024-05-02",
                "start_time": "12:02:35",
                "end_time": "12:07:35",
                "real_pace": 7.0,
                "real_distance": 5.2,
                "real_duration": "30:01",
                "user": 17,
                "run": null
            }
        ]
        }, []);

return {
    previousRuns,
    setPreviousRuns
}
}