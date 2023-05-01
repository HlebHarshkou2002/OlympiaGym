import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginAPI = {
  loginUser(email, password) {
    return instance.post(`auth/login`, {
        "email": email,
        "password": password
    }).then((response) => {
      return response;
    }).catch((error) => console.log(error));
  },

  getInformationAboutUser() {
    let token = localStorage.getItem("token");
    return instance.get(`auth/myself`, {
      headers: {
        Authorization: token
      },
    }).then((response) => {
      return response;
    }).catch((error) => console.log(error))
  }
};
