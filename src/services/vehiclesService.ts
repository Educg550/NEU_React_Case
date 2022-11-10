import { Api } from "../utils/api";
import { AuthProps } from "../utils/constants";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface RequestProps {
  token: string;
  user: User;
}

export const handleLogin = async (authData: AuthProps) => {
  const data = await Api.post<any, RequestProps>(
    "v1/neu/auth",
    JSON.stringify(authData.auth),
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    }
  ).catch((err) => console.log(err));

  if (data) getVehicles(data);
  else console.log("Invalid data!");
};

const getVehicles = async (token: RequestProps) => {
  // await Api.get("v1/neu/vehicles", token);
  console.log(token);
};
