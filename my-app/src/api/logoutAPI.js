import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const logoutAPI = {
  logoutUser() {
    let token = localStorage.getItem("token");
    return instance.post(`auth/logout`, {
      headers: {
        Authorization: token
      },
    }).then((response) => {
      return response;
    }).catch((error) => console.log(error));
  },
};

