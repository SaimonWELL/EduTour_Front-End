import { axiosAuth } from "../axios_config";
import { profile } from "../types";
import { authMe } from "./authme";

export const profileData = async () => {
  const user_name = await authMe();
  if (!user_name || typeof user_name == "number") return undefined;

  return await axiosAuth
    .get(`/users/${user_name}/profile`)
    .then((response) => {
      const data = response.data;
      data.username = user_name;
      return data as profile;
    })
    .catch(() => {
      return undefined;
    });
};
