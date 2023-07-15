import { apiSlice } from "./apiSlice";
const USERS_URL = 'auth/sign-in';


export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query:(data) => ({
                url:`${USERS_URL}`,
                method: 'POST',
                body:data
            }),
        }),
    }),
});

export const { useLoginMutation }  = usersApiSlice;