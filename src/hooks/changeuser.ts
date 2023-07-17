import { axiosAuth } from "../axios_config";
import { isAxiosError } from "axios";

export const changeUserHook = (
  user_name: string,
  avatar: string,
  first_name: string,
  last_name: string,
  middle_name: string
) => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    const access_token = JSON.parse(userInfo).access_token;
    return axiosAuth
      .put(
        `/users/${user_name}/profile`,
        {
          avatar,
          first_name,
          last_name,
          middle_name,
        },
        { headers: { Authorization: `Bearer ${access_token}` } }
      )
      .then((response) => {
        if (response.data.status) return response.data.status;
      })
      .catch((err) => {
        if (isAxiosError(err)) {
          if (err.response?.data.message) {
            return err.response?.data.message;
          } else {
            return err.message;
          }
        }
      });
  }
};
