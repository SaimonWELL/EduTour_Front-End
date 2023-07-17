import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import axios from "../axios_config";
import { event } from "../types";
import { toast } from "react-toastify";

export const getEvents = () => {
  const [events, eventChange] = useState<Array<event>>([]);
  useEffect(()=>{
    axios
      .get("/event/", { headers: { "Content-Type": "application/json" } })
      .then((response) => eventChange(response.data.data.events));
  }, []);
    return events;
};

export const getEvent = (id: string) => {
  const [event, setEvent] = useState<event>();
  useEffect(() => {
    axios
      .get(`/event/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setEvent(response.data.data.event))
      .catch((err) => {
        if (err instanceof AxiosError) toast.error(err.message);
      });
  }, []);
  return event;
};
