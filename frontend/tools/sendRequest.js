import axios from "axios";

axios.defaults.baseURL = "http://192.168.232.108:8000/";

export const sendRequest = async (method, endpoint, body) => { 
    const response = await axios.request({
        method: method,
        url: endpoint,
        data: body,
        headers: {
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    console.log(response)

    if (response.status === 401) {
        // localStorage.removeItem("token");
    }

    return response;
};
