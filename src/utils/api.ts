import axios from "axios";
import { defaultConfigs } from "./constants";
import { AuthProps } from "../contexts/auth/AuthContext";

export const Api = axios.create(defaultConfigs);

export const signin = async (authData: AuthProps) => {
  // const authorization = Buffer.from(
  //   `${authData.username}:${authData.password}`,
  //   "utf8"
  // ).toString("base64");
  // const response = await Api.post("v1/neu/auth/", {
  //   method: "post",
  //   headers: {
  //     Authorization: `Basic ${authorization}`,
  //   },
  // }).catch((err) => console.log(err));
  // if (response) {
  //   console.log(response);
  //   return response.data;
  // }

  // Chamadas à API foram feitas usando curl via terminal Bash,
  // pois o back-end da aplicação parece conter proteção CORS
  // contra requisições gerais via navegador Web, ainda que
  // Headers CORS de solicitação à API tenham sido setados.
  // Os seguintes dados foram obtidos via curl (e recebidos da porta 5000
  // com auxílio da ferramenta "json-server"):
  const response = await Api.get("auth").catch((err) =>
    console.log(`Erro ao obter dados do usuário: ${err}`)
  );
  if (response?.data.user.email === authData.username) return response.data;
};

export const getVehicles = async (token: string) => {
  // const response = await Api.get<VehicleProps>("v1/neu/vehicles", {
  //   headers: {
  //     Authorization: `bearer ${token}`,
  //     "Access-Control-Allow-Origin": "*",
  //   },
  // }).catch((err) => console.log(err));

  // De forma semelhante à requisição POST para obtenção do Token, a informação dos carros
  // pôde ser obtida somente via curl, por conta das políticas de bloqueio CORS na Web.
  // Seguem alguns carros obtidos via curl (e recebidos da porta 5000 com auxílio da
  // ferramenta "json-server"):
  const authResponse = await Api.get("auth").catch((err) =>
    console.log(`Erro ao obter dados do usuário: ${err}`)
  );
  if (authResponse?.data.token === token) {
    const response = await Api.get("cars").catch((err) =>
      console.log(`Erro ao obter dados dos carros: ${err}`)
    );
    console.log(`Carros obtidos: ${response?.data}`);
    if (response?.data.cars) return response.data;
  }
};

export const createVehicle = async (token: string) => {
  console.log(token);
};
