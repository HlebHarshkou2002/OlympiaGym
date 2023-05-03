import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const ordersAPI = {
  getOrders(userId) {
    let token = localStorage.getItem("token");
    return instance
      .get(`order?userId=${userId}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return response;
      });
  },
  getAllOrders() {
    let token = localStorage.getItem("token");
    return instance
      .get(`order/list`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return response;
      });
  }
};
