import { isAxiosError } from "axios";
import { axiosAuth } from "../axios_config";
import { toast } from "react-toastify";

export const authMe = async () => {
  const info = localStorage.getItem("userInfo");
  if (info) {
    const userInfo = JSON.parse(info as string);
    return await axiosAuth
      .get("/auth/me", {
        headers: { Authorization: `Bearer ${userInfo.access_token}` },
      })
      .then((response) => {
        return response.data.username; //401
      })
      .catch((err) => {
        if (isAxiosError(err)) {
          if (err.response?.status) {
            return err.response?.status;
          } else {
            toast.error(err.message);
          }
        }
      });
  }
};
