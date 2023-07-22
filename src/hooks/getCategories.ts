import { AxiosError } from "axios";
import { useEffect, useState } from "react"
import axios from "../axios_config";
import { category } from "../types"
import { toast } from "react-toastify";

export const getCategories = () => {
    const [category, categoryChange] = useState<Array<category>>();
    useEffect(() => {
        axios.get('/event/category/', {headers:{'Content-Type': 'application/json'}}).then(
            response => categoryChange(response.data.data.categories)
        ).catch(err => {
            if (err instanceof AxiosError)
                toast.error(err.message)
        }
        )
    },[]);
    return category;
}

export const getCategory = (id:number) => {
    const [category, categoryChange] = useState<category>();
    useEffect(() => {
        axios.get(`/event/category/${id}`, {headers:{'Content-Type': 'application/json'}}).then(
            response => categoryChange(response.data.data.category)
        ).catch(err => {
            if (err instanceof AxiosError)
                toast.error(err.message)
        }
        )
    },[]);
    return category;
}