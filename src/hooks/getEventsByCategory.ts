import { isAxiosError } from "axios";
import axios from "../axios_config";
import { event } from "../types";
import { toast } from "react-toastify";

export const getEventsByCategory = async (categories: number[]) => {
  return await axios
    .get(
      `/event/category_filter/?${categories
        .map((category) => `category_list=${category}`)
        .join("&")}`
    )
    .then((response) => {
      return response.data.data.events.flat() as event[];
    })
    .catch((e) => {
      if (isAxiosError(e))
        toast.error(e.response?.data.detail.msg || e.message);
      return [] as event[];
    });
};
