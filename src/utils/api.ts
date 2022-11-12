import axios from "axios";
import { defaultConfigs } from "./constants";
import { AuthProps } from "../contexts/auth/AuthContext";
import { VehicleProps } from "../pages/Home";

export const Api = axios.create(defaultConfigs);

export const signin = async (authData: AuthProps) => {
  // const response = await Api.post("v1/neu/auth/", {}, {
  //   method: "post",
  //   headers: {
  //     auth: authData,
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
    let vehicles: VehicleProps[] = [];
    await Api.get(`cars`)
      .then((res) => {
        res.data.forEach((vehicle: VehicleProps) => {
          vehicles.push(vehicle);
        });
      })
      .catch((err) => console.log(`Erro ao obter dados dos carros: ${err}`));
    return vehicles;
  }
};

export const createVehicle = async (token: string, plate: string) => {
  const authResponse = await Api.get("auth").catch((err) =>
    console.log(`Erro ao obter dados do usuário: ${err}`)
  );
  if (authResponse?.data.token === token) {
    await Api.post(`cars`, {
      plate: plate,
    }).catch((err) => console.log(`Erro ao obter dados dos carros: ${err}`));
  }
};
