import React, { Dispatch, createContext, useEffect, useState } from "react"
import { profile } from '../types'
import { profileData } from "../hooks/profileData";

interface AuthContext {
  auth: profile | undefined;
  setAuth: Dispatch<profile | undefined>;
}

const AuthContext = createContext<AuthContext>({
  auth: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setAuth: () => {},
});

interface AuthProviderProps {
  children: JSX.Element;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<profile>();
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        profileData().then((profile) => {
            setAuth(profile)
        })
    
        setLoading(false);
    }, [])

    return !loading ? (<AuthContext.Provider value={{ auth, setAuth }}>
        {children}
    </AuthContext.Provider>) :
        (<p>Загрузка</p>)
}

export default AuthContext;
