import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { axiosAuth } from "../axios_config";
import { toast } from "react-toastify";
import { profile } from "../types";
import { authMe } from "./authme";

export const profileData = async () => {
  const username = await authMe();
  if (typeof username == 'number') return null
    const access_token = JSON.parse(
      localStorage.getItem("userInfo") as string
    ).access_token;
    return axiosAuth
      .get(`/users/${username}/profile`, {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((response) => {
        const data = response.data;
        data.username = username;
        return data as profile;
      })
      .catch((err) => {
        return err as AxiosError;
      });

  
};
