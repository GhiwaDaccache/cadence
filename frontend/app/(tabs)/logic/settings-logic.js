// Dependencies
import { useState } from "react";

// Tools
import { deleteToken } from "../../../tools/secureStore";

export const useSettingsLogic = () => {
   
    const handleLogout = async () => {
        await deleteToken('token')
        }

    return {
        handleLogout,
    }
}
