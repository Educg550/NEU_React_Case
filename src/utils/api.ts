import axios from "axios";
import { defaultConfigs } from "./constants";

export const Api = axios.create(defaultConfigs);
