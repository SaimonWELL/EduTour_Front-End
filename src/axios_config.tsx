import axios from "axios";

const base_data_url = "http://109.172.81.237:8888/"
const base_auth_url = "http://188.243.187.57:8000/api/v1/"

export default axios.create({
    baseURL: base_data_url,
    // withCredentials:true
});

export const axiosAuth = axios.create({
    baseURL: base_auth_url,
    // withCredentials: true
});