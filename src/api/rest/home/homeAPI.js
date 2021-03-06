import axios from "axios";

import { mockHomeAPI } from "./mockHomeAPI";

export const instance = axios.create({
  baseURL: "",
  responseType: "json",
});

export const homeAPI = {
  getProductList: () => {
    mockHomeAPI.getProductList();
    return instance.get("/");
  }
};
