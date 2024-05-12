import { useState } from "react";
import { router } from "expo-router";
import { Alert } from "react-native";

export const useRegistrationLogic = () => {
  const [record, setRecord] = useState({ firstName: "", lastName: ""});

  const handleRecord = async () =>{
    if (!record.firstName || !record.lastName) {
      Alert.alert("Error", "All fields are required");
      return;
  }
  const recordBody = {
    "user":
        {
            "first_name": record.firstName,
            "last_name": record.lastName,
        }
  }
  try {
    const response = await fetch("http://192.168.232.108:8000/cadence/api/user/update/", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(recordBody),
    });
    const json = await response.json();
    if (json.message === "success") {
        router.push("/login");
    }
} catch (error) {
    console.log(error);
} 
};


  return {
    record,
    setRecord,
    handleRecord
  }
}
