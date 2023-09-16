import { fetchAndProcesd } from "./apiaxios";
import { METHOD_TYPE } from "./constant";

const signup = (payload, callback) => {
  fetchAndProcesd("/user/signup", METHOD_TYPE.POST, payload, callback);
}

const API = { signup};
export default API;