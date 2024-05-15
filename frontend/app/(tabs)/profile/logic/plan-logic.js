// Dependencies
import { useEffect, useState } from "react";
import { Text } from "react-native";

// Components
import PlanTracker from '../../../../components/PlanTracker';

// Tools
import { getValueFor } from '../../../../tools/secureStore';
import { convertToMinutes } from '../../../../tools/utils/convertTime';


export const usePlanLogic = () => {
    const [plan, setPlan] = useState(null);
    const [planData, setPlanData] = useState(null);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        const getToken = async () => {
            const token = await getValueFor('token')
            return token;
        }
        
        getToken().then(token => {
            if (token) {
                fetch("http://192.168.232.108:8000/cadence/api/user/get_user_plan/", {
                    method: "GET", 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(response => {
                    if (!response.message === 'Success') {
                        throw new Error("Failed to load plan");
                    }
                    return response.json();
                })
                .then(data => {
                    const plan_response = {'name': data.data.name, 'duration': data.data.duration, 'distance': data.data.distance}
                    setPlan(plan_response)

                })
                .catch(error => {
                    setPlan([]);
                })
            }
        })

        getToken().then(token => {
            if (token) {
                fetch("http://192.168.232.108:8000/cadence/api/plan_run/", {
                    method: "GET", 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(response => {
                    if (!response.message === 'Success') {
                        throw new Error("Failed to load plan data");
                    }
                    return response.json();
                })
                .then(data => {
                    const plan_data_response = {'recorded_runs': data.data.recorded_runs, 'runs': data.data.runs, 'plan_runs': data.data.plan_runs}
                    setPlanData(plan_data_response)
                })
                .catch(error => {
                    setPlanData([]);
                })
            }
        })

    }, [])

    useEffect(() => {
        if (plan && planData) {
            setIsLoading(false);
        }
    }, [plan, planData]);
    
    
    const renderPlan = () => {
        if (isloading) {
          return <Text className='font-urbanist self-center text-base pt-12'>Loading plan...</Text>
        } else if (!plan) {
          return <Text Text className='font-urbanist self-center text-base pt-12'>You don't have any plans</Text>
        } else {
           const totalRuns = planData.plan_runs.length
           function weekDay(day) {
            switch (day) {
                case 1:
                    return "Mon";
                case 2:
                    return "Tue";
                case 3:
                    return "Wed";
                case 4:
                    return "Thu";
                case 5:
                    return "Fri";
                case 6:
                    return "Sat";
                case 7:
                    return "Sun";
                default:
                    return "Invalid"; 
                }

            }

           const runs = []

           for (let i = 0; i < planData.runs.length; i++) {
            const run = planData.runs[i]
            const { distance } = run
            const recordedRun = planData.recorded_runs.find(recorded => recorded.run === run.id)
            const planRun = planData.plan_runs.find(plan => plan.run === run.id)

            const { day } = planRun
            const week_day = weekDay(day)

            if (recordedRun) {
                const real_duration  = convertToMinutes(recordedRun.real_duration)
                runs.push({ distance, real_duration, week_day })
            } else {
                runs.push({ distance, week_day })
            }
        }
          return (
            <PlanTracker
                planName={plan.name}
                distance={plan.distance}
                weeks={plan.duration}
                currentWeek={planData.plan_runs[0].week}
                weekRuns={totalRuns}
                runs={runs}
            />
          )
        }
      }


    return {
        renderPlan
    }
}
