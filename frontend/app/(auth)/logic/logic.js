// Dependencies
import { router } from "expo-router";
import { Alert } from "react-native";
import { useState } from "react";

// Tools
import { sendRequest } from "../../../tools/sendRequest";
import { requestMehods } from "../../../tools/requestMethods";


export const useAuthenticationLogic = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [info, setInfo] = useState({username: "", password: "", first_name: "", last_name: "", email: ""});


//   const switcher = (value) => {
//     setIsLogin(value);
//  };

const handleLogin = () =>{
  console.log("logged in")
  router.replace("/profile")

};

const handleSignUp = async () => {
  console.log("signed in");
  router.push("/login");
  if (!info.email || !info.username || !info.password) {
      Alert.alert("Error", "All fields are required");
      return;
  }
  console.log("signed in 2");
  setIsSubmitting(true);
  console.log(info);
  const infoBody = {
    "user":
        {
            "username": info.username,
            "password": info.password,
            "first_name": "",
            "last_name": "",
            "email":info.email
        }
};
  try {
      const response = await fetch("http://192.168.232.108:8000/cadence/api/user/register/", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(infoBody),
      });
      const json = await response.json();
      console.log(json);
      if (json.status === "success") {
          // localStorage.setItem("token", json.authorisation.token);
          router.push("/registration");
      }
  } catch (error) {
      console.log(error);
  } finally {
      setIsSubmitting(false);
  }
};


  return {
    // isLogin,
    credentials,
    setCredentials,
    info,
    setInfo,
    handleLogin,
    handleSignUp
    // switcher,
    // setIsLogin,
  };
};
