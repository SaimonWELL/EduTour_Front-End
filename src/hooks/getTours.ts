import { AxiosError } from "axios";
import { useEffect, useState } from "react"
import axios from "../axios_config";
import { event } from "../types"
import { toast } from "react-toastify";

export const getTours = () => {
    const [events, eventChange] = useState<Array<event>>();
    useEffect(() => {
        axios.get('tour/', {headers:{'Content-Type': 'application/json'}}).then(
            response => eventChange(response.data.data.tours)
        ).catch(err => {
            if (err instanceof AxiosError)
                toast.error(err.message)
        }
        )
    },[]);
    return events;
}

export const getTour = (id:string) => {
    const [event, setEvent] = useState<event>();
    useEffect(()=>{
        axios.get(`tour/${id}`, {headers:{
            'Content-Type':'application/json'
        }}).then(
            response=> setEvent(response.data.data.tour)
        ).catch(err => {
            if (err instanceof AxiosError)
                toast.error(err.message)
        }
        )
    },[]);
    return event;
}