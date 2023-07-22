import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import axios from "../axios_config";
import { tour } from "../types";
import { toast } from "react-toastify";

export const getTours = () => {
  const [tours, toursChange] = useState<Array<tour>>([]);
  useEffect(()=>{
    axios
      .get("/tour/", { headers: { "Content-Type": "application/json" } })
      .then((response) => toursChange(response.data.data.tours));
  }, []);
    return tours;
};

export const getTour = (id: string) => {
  const [tour, setTour] = useState<tour>();
  useEffect(() => {
    axios
      .get(`/tour/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setTour(response.data.data.tour))
      .catch((err) => {
        if (err instanceof AxiosError) toast.error(err.message);
      });
  }, []);
  return tour;
};
