import { VehicleProps } from "../pages/Home";

export interface AxiosConfigProps {
  baseURL: string;
  headers: Object;
}

export interface FakeApiCars {
  cars: VehicleProps[];
}

export const defaultConfigs: AxiosConfigProps = {
  baseURL: "http://localhost:5000/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};
