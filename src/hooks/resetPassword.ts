import { toast } from "react-toastify";
import { axiosAuth } from "../axios_config";
import { isAxiosError } from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export const sendEmail = (email: string) => {
  axiosAuth
    .post("/auth/reset-password", {
      email,
    })
    .then((response) => {
      toast.info(response.data.status);
    })
    .catch((e) => {
      if (isAxiosError(e)) toast.error(e.response?.data.message || e.message);
    });
};

export const resetPassword = (password: string, reset_token: string) => {
  axiosAuth
    .post("/auth/confirm-password", {
      password,
      reset_token,
    })
    .then((response) => {
      toast.info(response.data.status);
    })
    .catch((e) => {
      if (isAxiosError(e)) toast.error(e.response?.data.message || e.message);
    });
};

export const newPassword = (old_password:string, new_password: string, username:string) => {
  const userInfo = localStorage.getItem("userInfo");
  if (userInfo) {
    const access_token = JSON.parse(userInfo).access_token;
    axiosAuth
      .post(`/users/${username}/password`, {
        new_password,
        old_password
      },{
        headers:{'Authorization':`Bearer ${access_token}`}
      })
      .then((response) => {
        toast.info(response.data.status);
      })
      .catch((e) => {
        if (isAxiosError(e)) toast.error(e.response?.data.message || e.message);
      });
  }
};
