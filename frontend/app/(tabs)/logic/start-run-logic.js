import { useState } from "react";

export const useStartRunLogic = () => {
    const [buttonText, setButtonText] = useState('Start');

    const handleButtonPress = () => {
        setButtonText(prevText => (prevText === 'Start' ? 'Stop' : 'Start'));
      };
    

  return {
    buttonText,
    handleButtonPress
  };
};
