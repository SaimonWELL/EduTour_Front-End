import { ReactElement, ReactPortal } from "react";

export type Auth = {
    access_token: string,
    refresh_token: string,
    expire_in: number
}
export type AuthState = {
    auth: Auth
}

export type event = {
    id: number,
    name: string,
    description: string,
    max_users: number,
    date_start: string,
    date_end: string,
    reg_deadline: string,
    address: string,
    category_id: number
};

export type profile = {
    username: 'string',
    avatar: 'string',
    first_name: 'string',
    last_name: 'string',
    middle_name: 'string'
} 

export type category = {
    id: number,
    name: string
}