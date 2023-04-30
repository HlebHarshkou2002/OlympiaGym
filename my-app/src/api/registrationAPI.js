import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const registrationAPI = {
  registrateUser(email, password) {
    return instance.post(`auth/registration`, {
      body: {
        "email": email,
        "name": "pofig",
        "password": password
      }
    }).then((response) => {
      return response;
    });
  },
};
