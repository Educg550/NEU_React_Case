import { useContext } from "react";
import Login from "../../pages/Login";
import { AuthContext } from "./AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { user } = useContext(AuthContext);
  if (user) return children;
  return <Login />;
};
