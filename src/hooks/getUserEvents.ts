import { AxiosError } from "axios";
import { axiosAuth } from "../axios_config";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

export const getUserEvents = () => {
 
  const [userEvents, setUserEvents] = useState<number[]>();
  useEffect(() => {
    const access_token = JSON.parse(
      localStorage.getItem("userInfo") as string
    )?.access_token;
    if (access_token)
    axiosAuth
      .get(`user/event`)
      .then((response) => {
        if (response.data.status.slice(0, 3) == "200")
          setUserEvents(response.data.data.user_events.event_id_list);
      })
      .catch((err) => {
        if (err instanceof AxiosError) toast.error(err.message);
      });
  }, []);
  return userEvents;
};
