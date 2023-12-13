import { AxiosError } from "axios";
import { axiosAuth } from "../axios_config";
import { toast } from "react-toastify";

export const signUpForEvent = (event_id: number) => {
  const access_token = JSON.parse(
    localStorage.getItem("userInfo") as string
  )?.access_token;
  if (access_token)
  axiosAuth
    .post(
      `user/event`,
      { event_id })
    .then((response) => {
      if (response.data.status.slice(0, 3) == "200")
        toast.success(response.data.message);
      else toast.error(response.data.message);
    })
    .catch((err) => {
      if (err instanceof AxiosError) toast.error(err.message);
      throw err
    });
};
