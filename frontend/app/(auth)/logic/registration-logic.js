import { useState } from "react";

export const useRegistrationLogic = () => {
  const [record, setRecord] = useState({ firstName: "", lastName: "",  sex:"", age:0, height: 0 });

  return {
    record,
    setRecord,
  };
};
