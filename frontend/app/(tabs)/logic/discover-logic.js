// Dependencies
import { useEffect, useState } from "react";
import { Text, FlatList } from "react-native";

// Components
import PlanCard from "../../../components/PlanCard";
// Assets
import images from "../../../assets/images/images";

// Tools
import { getValueFor } from "../../../tools/secureStore";

export const useDiscoverLogic = () => {
    const [plans, setPlans] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    useEffect(() => {
        const getToken = async () => {
            const token = await getValueFor('token')
            return token
        }
        

        getToken().then(token => {
            if (token) {
                fetch("http://192.168.232.108:8000/cadence/api/plan/", {
                    method: "GET", 
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(response => {
                    if (!response.message === 'success.') {
                        throw new Error("Failed to load plans");
                    }
                    return response.json();
                })
                .then(data => {
                    setPlans(data.data)
                })
                .catch(error => {
                    setPlans([]);
                })
            }
        })

    }, [])

    useEffect(() => {
        if (plans.length > 0) {
            setIsLoading(false);
        }
    }, [plans]);
    
    
    const renderPlans = () => {
        if (isloading) {
          return <Text className='font-urbanist self-center text-base pt-12'>Loading plans...</Text>;
        } else if (plans.length == 0) {
          return <Text Text className='font-urbanist self-center text-base pt-12'>No plans available</Text>;
        } else {
          return (
            <FlatList
              className='self-start'
              showsVerticalScrollIndicator={false}
              data={plans}
              renderItem={({ item }) => (
                <PlanCard 
                    image={images.plan}
                    distance={item.distance}
                    duration={item.duration}
                    level={item.level}
                    title={item.name}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          );
        }
      };
    

    return {
        renderPlans,
    }
}


