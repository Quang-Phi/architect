import axios from "axios";
import { CONFIG } from "./utils";

const myAxios = axios.create({
  baseURL: CONFIG.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
export default myAxios;
