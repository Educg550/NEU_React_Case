import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  if (localStorage.getItem("authToken")) return children;
  return <RedirectLogin />;
};

const RedirectLogin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, []);
  return <></>;
};
