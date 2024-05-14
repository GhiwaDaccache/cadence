// Dependencies
import { useState } from "react";
import { router } from "expo-router";

// Tools
import { deleteToken } from "../../../tools/secureStore";

export const useSettingsLogic = () => {
   
    const handleLogout = async () => {
        await deleteToken('token')
        router.replace('/')
        }

    return {
        handleLogout,
    }
}
