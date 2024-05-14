// Dependencies
import { useState } from "react";

// Tools
import { deleteToken } from "../../../tools/secureStore";
import { router } from "expo-router";

export const useSettingsLogic = () => {
   
    const handleLogout = async () => {
        await deleteToken('token')
        router.replace('/')
        }

    return {
        handleLogout,
    }
}
