import axios from "axios";

const base_data_url = "https://softbananas.ru/api/v1"
const base_auth_url = "https://softbananas.ru/api/v1"

export default axios.create({
    baseURL: base_data_url,
    // withCredentials:true
});

export const axiosAuth = axios.create({
    baseURL: base_auth_url
});

axiosAuth.interceptors.request.use((config) => {
    const userInfo = localStorage.getItem('userInfo')
    if (userInfo) config.headers.Authorization = `Bearer ${JSON.parse(userInfo).access_token}`
    return config
})

axiosAuth.interceptors.response.use(
    // в случае валидного accessToken ничего не делаем:
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = { ...error.config };
        originalRequest._isRetry = true;    
        if (
            (error.response.status === 401 || error.response.status === 422) &&
            error.config &&
            !error.config._isRetry
        ) {
            try {
                const userInfo = localStorage.getItem('userInfo')
                if (userInfo) {
                    const resp = await axiosAuth.post("/auth/refresh", { refresh_token: JSON.parse(userInfo).refresh_token });
                    localStorage.setItem("userInfo", JSON.stringify(resp.data))
            }
            } catch (error) {
                console.log("AUTH ERROR");
              }
            }
            // на случай, если возникла другая ошибка (не связанная с авторизацией)
            // пробросим эту ошибку 
            throw error;
          }
        );
