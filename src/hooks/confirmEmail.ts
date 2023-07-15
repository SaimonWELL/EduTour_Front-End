import { isAxiosError } from "axios";
import { axiosAuth } from "../axios_config";

export const confirmEmail = async (confirm_token: string) => {
  return axiosAuth
    .post("/auth/confirm", {
      confirm_token,
    }).then((response) => {
      return {confirmed: true, message: response.data as string}
    }).catch((err) => {
      if (isAxiosError(err)) {
        if (err.response?.data.message)
          return {
            confirmed: false,
            message: err.response?.data.message as string,
          };
        else {
          return { confirmed: false, message: err.message as string };
        }
      }
    });
};
