import Authenticator from "@/firebase/Authenticator";
import { User } from "firebase/auth";
import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";

type AuthData = {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signOut: () => void;
  checkLogin: () => void;
  authenticate: () => void;
  setLoading: (value: boolean) => void;
}

const AuthContext = createContext({} as AuthData);

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) =>
{
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signOut() {

  }

  async function checkLogin() {
    try {
      setLoading(true);
      const userData = await localStorage.getItem('userData');

      if(userData) {
        const userJson = JSON.parse(userData);

        setUser(userJson);
      }

      setLoading(false);
    } catch(err) {
      return signOut();
    }
  }

  const authenticate = async() => {
    const authenticator = new Authenticator()

    const userAuth = await authenticator.loginWithGoogle();

    setUser(userAuth);
  }

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{
      signed: Boolean(user),
      user,
      loading,
      setLoading,
      authenticate,
      signOut,
      checkLogin
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = ()=> {
  return useContext(AuthContext);
};