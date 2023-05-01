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
    let token = localStorage.getItem("token");
    return instance
      .get(`service/list`, {
        headers: {
          Authorization: token
        },
      })
      .then((response) => {
        return response;
      });
  },
};
