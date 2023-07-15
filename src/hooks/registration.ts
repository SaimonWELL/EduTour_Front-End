import { axiosAuth } from "../axios_config";
import { isAxiosError } from "axios";

export const registration = async (
  username: string,
  email: string,
  password: string
) => {
  return axiosAuth.post("/auth/sign-up", {
      email,
      password,
      username,
    }).then((response) => {
      return {isRegistred: true, message: response.data as string} as const;
    })
    .catch((err) => {
      if (isAxiosError(err)) {
        if (err.response?.data.message)
          return {isRegistred:false, message: err.response?.data.message} as const;
        else return {isRegistred:false, message: err.message} as const;
      }
    });
};
