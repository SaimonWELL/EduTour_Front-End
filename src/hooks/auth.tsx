import { isAxiosError } from "axios";
import { axiosAuth } from "../axios_config";

const Authorize = async (login: string, password: string) => {
  return axiosAuth
    .post("/auth/sign-in", {
      login,
      password,
    })
    .then((response) => {
      if (response.data.access_token) return response.data;
    })
    .catch((err) => {
      if (isAxiosError(err)) {
        if ("response" in err) {
          return err.response?.data.message;
        }
        return err.message;
      }
    });
};

export default Authorize;
