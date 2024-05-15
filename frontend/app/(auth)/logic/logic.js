// Dependencies
import { useState } from "react";
import { router } from "expo-router";
import { Alert } from "react-native";

// Tools
import { save } from "../../../tools/secureStore";
import AppH from "../../(tabs)/profile/logic/test-logic";

export const useAuthenticationLogic = () => {
  // const {authenticate } = useTestLogic()
  const [isLogin, setIsLogin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [info, setInfo] = useState({username: "", password: "", first_name: "", last_name: "", email: ""});


  const handleLogin = async () =>{
    if (!credentials.username || !credentials.password) {
      Alert.alert("Error", "All fields are required")
      return
    }
    setIsSubmitting(true)
    const credentialsBody = {
        "username": credentials.username,
        "password": credentials.password
    }

    try {
      const response = await fetch("http://192.168.232.108:8000/api/login/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(credentialsBody),
      })



      const spotify_token = await fetch("http://192.168.232.108:8000/cadence/api/spotify/create_spotify_token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
        },
      })

      const json = await response.json()
      const spotify_json = await spotify_token.json()

      if (json.access) {
        setIsLogin(true)
        save('token', json.access)
        save('spotify-token', spotify_json.access_token)
        router.push("/profile")
      }

  } catch (error) {
      console.log(error)
  } finally {
      setIsSubmitting(false)
  }
}

  const handleSignUp = async () => {
    if (!info.email || !info.username || !info.password) {
        Alert.alert("Error", "All fields are required")
        return
    }
    setIsSubmitting(true);
    const infoBody = {
      "user":
          {
              "username": info.username,
              "password": info.password,
              "first_name": "",
              "last_name": "",
              "email":info.email
          }
    }
    try {
        const response = await fetch("http://192.168.232.108:8000/cadence/api/user/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(infoBody),
        });
        const json = await response.json()
        if (json.message === "success") {
            router.push("/registration")
        }
    } catch (error) {
        console.log(error)
    } finally {
        setIsSubmitting(false)
    }
}

  return {
    credentials,
    setCredentials,
    info,
    setInfo,
    handleLogin,
    handleSignUp
  }
};
