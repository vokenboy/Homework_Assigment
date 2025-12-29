import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 2000,
});

api.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.code === "ECONNABORTED") {
            const timeoutError = new Error("Request timeout. Please try again.");
            return Promise.reject(timeoutError);
        }
        if (error.code === "ERR_NETWORK") {
            const networkError = new Error("Unable to connect to server. Please try again later.");
            return Promise.reject(networkError);
        }
        if (!error.response) {
            const serverError = new Error("Unable to connect to server. Please try again later.");
            return Promise.reject(serverError);
        }

        const status = error.response.status;
        const data = error.response.data;

        let errorMessage: string;

        switch (status) {
            case 400:
                errorMessage = data?.error;
                break;
            case 401:
                errorMessage = data?.error;
                break;
            case 403:
                errorMessage = data?.error;
                break;
            case 404:
                errorMessage = data?.error;
                break;
            case 500:
                errorMessage = data?.error;
                break;
            case 503:
                errorMessage = data?.error;
                break;
            default:
                errorMessage = data?.error;
        }

        return Promise.reject(new Error(errorMessage));
    }
);

export default api;
