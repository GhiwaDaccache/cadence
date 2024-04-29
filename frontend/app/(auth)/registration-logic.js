import { useEffect, useState } from "react";
import { router } from "expo-router";

export const useRegistrationLogic = () => {
  const [record, setRecord] = useState({ firstName: "", lastName: "", age:0, sex:"", height:0 });


  return {
    record,
    setRecord
  };
};
