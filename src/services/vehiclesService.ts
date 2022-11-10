import { Api } from "../utils/api";
import { authParams } from "../utils/constants";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface RequestProps {
  token: string;
  user: User;
}

export const handleLogin = async () => {
  const res = await Api.post<any, RequestProps>("v1/neu/auth", authParams);
  getVehicles(res);
};

const getVehicles = async (token: any) => {
  // await Api.get("v1/neu/vehicles", token);
  console.log(token);
};
