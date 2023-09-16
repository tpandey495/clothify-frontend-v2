import { Base_URL, METHOD_TYPE } from "./constant";
import jwtInterceoptor from "./axiosinterceptor";

export const fetchAndProcesd = (url, method, data, callback, headerData) => {
    const options = {
        baseURL: Base_URL,
        url: url,
        method: method,
        params: method === METHOD_TYPE.GET ? data : null,
        data: method !== METHOD_TYPE.GET ? data : null
    }
    jwtInterceoptor(options).then((response) => {
        callback(false, response.data);
    })
        .catch((error) => {
            if (error?.response?.data?.error) {
                callback(true, error?.response?.data?.error);
            }
            else {
                callback(true,"An error occurred while making the request.")
            }
        })
}