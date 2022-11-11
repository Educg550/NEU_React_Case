import { signin } from "../../utils/api";
import { useState } from "react";
import { User } from "./AuthContext";
import { AuthProps } from "./AuthContext";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = async (userData: AuthProps) => {
    const data = await signin(userData).catch((err) => console.log(err));
    console.log(data);
    if (data) {
      setUser(data.user);
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
