// Dependencies
import { router } from 'expo-router';
import { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";

// Components
import PlaylistCard from '../../../../components/PlaylistCard';

// Assets
import images from '../../../../assets/images/images'; 

// Tools
import { getValueFor } from '../../../../tools/secureStore';
import PlanTracker from '../../../../components/PlanTracker';

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
                    console.log("00000000000000")

                    console.log(plan_response)
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
                    console.log("AAAAAAAAAAAAAAAAAAAAA")
                    console.log(plan_data_response)
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
            console.log("1111111111111111111")
            console.log(plan)
            console.log("22222222222222222222")

            console.log(planData)
        }
    }, [plan, planData]);
    
    
    const renderPlan = () => {
        if (isloading) {
          return <Text className='font-urbanist self-center text-base pt-12'>Loading plan...</Text>
        } else if (!plan) {
          return <Text Text className='font-urbanist self-center text-base pt-12'>You don't have any plans</Text>
        } else {
           const totalRuns = planData.plan_runs.length

           console.log("NNNNNNN")
           console.log(plan)
           console.log(planData)
          return (
            <PlanTracker
                planName={plan.name}
                distance={plan.distance}
                weeks={plan.duration}
                currentWeek={planData.plan_runs[0].week}
                weekRuns={totalRuns}
                
            />
          )
        }
      }


    return {
        renderPlan
    }
}
