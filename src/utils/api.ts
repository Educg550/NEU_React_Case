import axios from "axios";
import { defaultConfigs, token } from "./constants";
import { AuthProps, RequestProps } from "../contexts/auth/AuthContext";

export const Api = axios.create(defaultConfigs);

export const signin = async (authData: AuthProps) => {
  const response = await Api.post(
    "v1/neu/auth/",
    { auth: authData },
    {
      method: "post",
      auth: authData,
    }
  ).catch((err) => console.log(err));
  if (response) {
    console.log(response);
    return response.data;
  }
};

export const getVehicles = async (config: RequestProps) => {
  const response = await Api.get("v1/neu/vehicles");
  console.log(response);
};

export const createVehicle = async (config: RequestProps) => {
  console.log(token);
};
