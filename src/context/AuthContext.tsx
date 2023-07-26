import React, { Dispatch, createContext, useEffect, useState } from "react";
import { profile } from "../types";
import { profileData } from "../hooks/profileData";
import { isAxiosError } from "axios";
import { refreshToken } from "../hooks/refreshtoken";

interface AuthContext {
  auth: profile | undefined |null;
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
  const [auth, setAuth] = useState<profile | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const userInfo = localStorage.getItem("userInfo");
      if (userInfo) {
        const profile = await profileData();
        if (profile && !isAxiosError(profile)) setAuth(profile);
        else if (JSON.parse(userInfo).refresh_token) {
          const newInfo = await refreshToken(
            JSON.parse(userInfo).refresh_token
          );
          if (newInfo) {
            localStorage.setItem("userInfo", JSON.stringify(newInfo));
            const refreshProfile = await profileData();
            if (isAxiosError(refreshProfile)){
              localStorage.removeItem("userInfo");
            }
            else if(refreshProfile){
              setAuth(refreshProfile);
            }
          }
        }
      }
      setLoading(false);
    })();
  }, []);

  return !loading ? (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  ) : (
    <p>Загрузка</p>
  );
};

export default AuthContext;
