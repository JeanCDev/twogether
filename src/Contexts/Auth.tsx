import Authenticator from "@/firebase/Authenticator";
import { User } from "firebase/auth";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

type AuthData = {
  signed: boolean;
  user: User | null;
  loading: boolean;
  authenticate: () => void;
  setLoading: (value: boolean) => void;
}

const AuthContext = createContext({} as AuthData);

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) =>
{
  const authenticator = new Authenticator()
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const authenticate = async() => {
    const userAuth = await authenticator.loginWithGoogle();

    setUser(userAuth);
  }

  useEffect(() => {
    authenticator.validateLogin(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{
      signed: Boolean(user),
      user,
      loading,
      setLoading,
      authenticate
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = ()=> {
  return useContext(AuthContext);
};