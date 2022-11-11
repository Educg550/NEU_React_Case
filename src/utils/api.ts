import axios from "axios";
import { defaultConfigs, token } from "./constants";
import { AuthProps, RequestProps } from "../contexts/auth/AuthContext";

export const Api = axios.create(defaultConfigs);

export const signin = async (authData: AuthProps) => {
  const authorization = Buffer.from("email:senha", "utf8").toString("base64");
  console.log(`authorization: ${authorization}`);
  const response = await Api.post("v1/neu/auth/", {
    method: "post",
    headers: {
      Authorization: `Basic ${authorization}`,
    },
  }).catch((err) => console.log(err));
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
