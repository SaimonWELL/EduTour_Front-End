import { AxiosError } from "axios";
import { axiosAuth } from "../axios_config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export const getUserTours = () => {
  const [userEvents, setUserEvents] = useState<number[]>();
  useEffect(() => {
    const access_token = JSON.parse(
      localStorage.getItem("userInfo") as string
    )?.access_token;
    if (access_token)
    axiosAuth
      .get(`user/tour`)
      .then((response) => {
        if (response.data?.data?.user_tours?.tour_id_list)
          setUserEvents(response.data.data.user_tours.tour_id_list);
      })
      .catch((err) => {
        if (err instanceof AxiosError) toast.error(err.message);
      });
  }, []);
  return userEvents;
};
