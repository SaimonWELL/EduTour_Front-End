import { isAxiosError } from "axios";
import axios from "../axios_config";
import { tour } from "../types";
import { toast } from "react-toastify";

export const getToursByCategory = async (categories: number[]) => {
  return await axios
    .get(
      `/tours/category_filter/?${categories
        .map((category) => `category_list=${category}`)
        .join("&")}`
    )
    .then((response) => {
      return response.data.data.tours.flat() as tour[];
    })
    .catch((e) => {
      if (isAxiosError(e))
        toast.error(e.response?.data.detail.msg || e.message);
      return [] as tour[];
    });
};
