import axios from "axios";
import { Api } from "../utils/api";
import { authParams, defaultConfigs } from "../utils/constants";
const base64 = require("base-64");

export interface User {
  id: number;
  name: string;
  email: string;
}

interface RequestProps {
  token: string;
  user: User;
}

const headers = new Headers();
headers.set(
  "Authorization",
  "Basic " +
    base64.encode(authParams.auth.username + ":" + authParams.auth.password)
);

export const handleLogin = async () => {
  fetch(defaultConfigs.baseURL + "v1/neu/auth", {
    method: "POST",
    headers: headers,
    //credentials: 'user:passwd'
  })
    .then((response) => response.json())
    .then((json) => getVehicles(json));
};

const getVehicles = async (token: any) => {
  // await Api.get("v1/neu/vehicles", token);
  console.log(token);
};
