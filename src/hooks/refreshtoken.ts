import { isAxiosError } from "axios";
import { axiosAuth } from "../axios_config";
import { Auth } from "../types";
import { toast } from "react-toastify";

export const refreshToken = async (refresh_token: "string") => {
  return await axiosAuth
    .post("/auth/refresh", { refresh_token })
    .then((response) => {
      return response.data as Auth;
    })
    .catch((e) => {
      return null;
    });
};
