import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { axiosAuth } from "../axios_config";
import { toast } from "react-toastify";
import { profile } from "../types";
import { authMe } from "./authme";

export const profileData = async () => {
  const user_name = await authMe();
  if (typeof user_name == 'number') return null
    const access_token = JSON.parse(
      localStorage.getItem("userInfo") as string
    ).access_token;
    return axiosAuth
      .get(`/users/profile/${user_name}`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((response) => {
        const data = response.data;
        data.username = user_name;
        return data as profile;
      })
      .catch((err) => {
        return err;
      });

  
};
