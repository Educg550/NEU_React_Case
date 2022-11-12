import { signin } from "../../utils/api";
import { useState } from "react";
import { User } from "./AuthContext";
import { AuthProps } from "./AuthContext";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const handleLogin = async (userData: AuthProps) => {
    const data = await signin(userData);
    if (data) {
      setUser(data?.user);
      setToken(data?.token);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
