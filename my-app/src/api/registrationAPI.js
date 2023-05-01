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
      method: 'POST',
      params: { 'api-version': '3.0' },
      headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': 'your-rapidapi-key',
          'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
      },
      data: userData,
      body: userData,
    }).then((response) => {
      return response;
    });
  },
};
