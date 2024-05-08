import { useState } from "react";

export const useRegistrationLogic = () => {
  const [record, setRecord] = useState({ firstName: "", lastName: ""});

  return {
    record,
    setRecord,
  };
};
