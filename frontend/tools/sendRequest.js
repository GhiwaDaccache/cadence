import axios from "axios";

// axios.defaults.baseURL = "http://185.76.176.19:8000/";

export const sendRequest = async (method, endpoint, body) => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    console.log(endpoint)
    
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
