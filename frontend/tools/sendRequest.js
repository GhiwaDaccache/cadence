import { getValueFor } from "./secureStore";

export const sendRequest = async (method, endpoint, body) => { 

    const getToken = async () => {
        const token = await getValueFor('token')
        return token;
    }

    const token = await getToken();
    if (token) {
        const response = await fetch(`http://192.168.232.108:8000/${endpoint}/`, {
            method: method,
            body: JSON.stringify(body),
            headers: {
                Authorization: `Bearer ${token}`,

            }
        });

        const data = await response.json();

        if (response.status === 401) {
            // localStorage.removeItem("token");
        }

        return response;
    }
};

