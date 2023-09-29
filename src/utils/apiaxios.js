// api.js
import { Base_URL, METHOD_TYPE } from "./constant";
import jwtInterceptor from "./axiosinterceptor";

export const fetchAndProcessData = async (url, method, data) => {
  try {
    const options = {
      baseURL: Base_URL,
      url: url,
      method: method,
      params: method === METHOD_TYPE.GET ? data : null,
      data: method !== METHOD_TYPE.GET ? data : null,
    };
    const response = await jwtInterceptor(options);
    return response.data; // Return the response data
  } catch (error) {
    // If an error occurs, throw an error object with an appropriate message
    if (error?.response?.data?.error) {
      throw new Error(error?.response?.data?.error);
    } else {
      console.log(error);
      throw new Error("An error occurred while making the request.");
    }
  }
};