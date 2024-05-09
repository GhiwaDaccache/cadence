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
  router.push("/profile")

};

const handleSignUp = async () =>{
  console.log("signed in")
  router.push("/login")
  if(!info.email || !info.username || !info.password){
    Alert.alert("Error", "All fields are required")
    return
  }
  console.log("signed in 2")
  setIsSubmitting(true)
  console.log(info)
  try{
    const response = await sendRequest(requestMehods.POST, "cadence/api/user/register/", {
      ...info,
    });
    console.log(response.data.status)
    if (response.data.status === "success") {
      // localStorage.setItem("token", response.data.authorisation.token);
      router.push("/registration")
    }
  } catch (error){
    console.log(error)
  } finally {
    setIsSubmitting(false)
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
