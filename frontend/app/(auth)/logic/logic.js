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

const handleSignUp = () =>{
  if(!info.email || !info.username || !info.password){
    Alert.alert("Error", "All fields are required")
  }
  setIsSubmitting(true)
  router.push("/registration")
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
