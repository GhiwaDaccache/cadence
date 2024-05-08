import { useEffect, useState } from "react";
import { router } from "expo-router";
import { Alert } from "react-native";


export const useAuthenticationLogic = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [info, setInfo] = useState({ email: "", username: "", password: "" });

  const [error, setError] = useState("");

  // useEffect(() => {
  //   if (!credentials.email.includes("@")) {
  //     setError("Invalid email");
  //   } else if (credentials.password.length < 6) {
//       setError("Short password");
//     } else {
//       setError("");
//     }
//   }, [credentials]);

//   const switcher = (value) => {
//     setIsLogin(value);
//  };

const handleLogin = () =>{
  console.log("logged in")

};

const handleSignUp = async () =>{
  if(!info.email || !info.username || !info.password){
    Alert.alert("Error", "All fields are required")
    return
  }
  setIsSubmitting(true)
  try{
    const response = await sendRequest(requestMehods.POST, "http://localhost:8000/cadence/api/user/register/", {
      ...info,
    });
    if (response.data.status === "success") {
      localStorage.setItem("token", response.data.authorisation.token);
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
    // setError,
  };
};
