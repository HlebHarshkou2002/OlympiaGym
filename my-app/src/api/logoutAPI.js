import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const logoutAPI = {
  logoutUser(email, password) {
    return instance.post(`auth/logout`).then((response) => {
      return response;
    }).catch((error) => console.log(error));
  },
};

