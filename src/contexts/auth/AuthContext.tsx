import { createContext } from "react";

export interface AuthProps {
  username: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface RequestProps {
  token: string;
  user: User | null;
}

export interface AuthContextProps {
  user: User | null;
  handleLogin: (userData: AuthProps) => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextProps>(null!);
