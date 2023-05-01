import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registrationAPI = {
  registrateUser(email, password) {
    let userData = {
      "email": email,
      "name": "pofig",
      "password": password
    };
    return instance.post(`auth/registration`, {
        "email": email,
        "name": "pofig",
        "password": password
    }).then((response) => {
      return response;
    });
  },
};
