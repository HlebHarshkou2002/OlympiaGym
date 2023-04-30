import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const servicesAPI = {
  getServices() {
    return instance.get(`service/list`).then((response) => {
      return response.data;
    });
  },
};
