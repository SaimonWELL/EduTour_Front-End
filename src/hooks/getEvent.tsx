import axios from "axios";
import { useEffect, useState } from "react"
import { base_url } from "../axios_config";

export type event = {
    id: number,
    name: string,
    description: string,
    max_users: number,
    date_start: Date,
    date_end: Date,
    reg_deadline: Date,
    city: string,
    category: number[]

};

export const getEvents = () => {
    const [event, eventChange] = useState<Array<event>>();
    useEffect(()=>{
        axios.get(base_url + 'events').then(
            responce => eventChange(JSON.parse(responce.data))
        )
    }, []);
    return event;
}