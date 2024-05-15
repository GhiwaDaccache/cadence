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
    const [plan, setPlan] = useState({'name': '', 'duration': 0, 'distance': 0});
    const [planData, setPlanData] = useState({'recorded_runs': [], 'runs': [], 'plan_runs': []});
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
                    setPlan(data.data)
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
                    setPlanData(data.data)
                })
                .catch(error => {
                    setPlanData([]);
                })
            }
        })

    }, [])

    useEffect(() => {
        if (plan) {
            setIsLoading(false);
            console.log(plan)
            console.log(planData)
        }
    }, [plan, planData]);
    
    
    const renderPlan = () => {
        if (isloading) {
          return <Text className='font-urbanist self-center text-base pt-12'>Loading plan...</Text>
        } else if (!plan) {
          return <Text Text className='font-urbanist self-center text-base pt-12'>You don't have any plans</Text>
        } else {
           const totalRuns = planData.plan_runs.length()
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
