import { axiosAuth } from "../axios_config";

export const refresh = async ( refresh_token: string ) => {
    return await axiosAuth.post('/auth/refresh', { refresh_token }).then( ( response ) => {
        if ( response.data.access_token && response.data.access_token && response.data.expire_at ){
            localStorage.setItem("userInfo", JSON.stringify(response.data))
            return response.data as { access_token: string, refresh_token: string, expiredAt: number }
        }
        return 'FAILED'
    } ).catch( () => {
        return 'FAILED'
    })
}