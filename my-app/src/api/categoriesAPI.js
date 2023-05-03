import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8001/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});

export const categoriesAPI = {
  getCategories() {
    let token = localStorage.getItem("token");
    return instance
      .get(`category/list`, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        return response;
      });
  },

  addNewCategory(categoryName, categoryDescription) {
    let token = localStorage.getItem("token");
    return instance
    .post(`/category`, {
      name: categoryName,
      description: categoryDescription
    }, {
      headers: {
        Authorization: token,
      }
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });

  },

  deleteService(serviceId) {
    let token = localStorage.getItem("token");
    return instance.delete(`/service?id=${serviceId}`,
     {
      headers: {
        Authorization: token,
      }
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      console.log(error);
    });
  }
};
