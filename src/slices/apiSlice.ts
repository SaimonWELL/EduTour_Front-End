import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl:'http://92.255.78.139:8000/api/v1/'});

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints:(builder) => ({}),
});