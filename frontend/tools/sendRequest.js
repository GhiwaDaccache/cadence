export const sendRequest = async (method, endpoint, body) => { 
    const response = await fetch(`http://192.168.232.108:8000/${endpoint}`, {
        method: method,
        data: JSON.stringify(body),
        headers: {
            // Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    const data = await response.json();

    if (response.status === 401) {
        // localStorage.removeItem("token");
    }

    return response;
};
