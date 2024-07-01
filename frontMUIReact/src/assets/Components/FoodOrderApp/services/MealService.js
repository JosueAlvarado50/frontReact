import axios from "axios";
const REST_API_BASE_URL = "http://34.121.33.230:8081/api/food-order-app/meals";
const USERNAME = "admin";
const PASSWORD = "admin";

const headers = {
  Authorization: localStorage.getItem("token"),
  "Content-Type": "application/json", // Asegúrate de establecer el tipo de contenido adecuado si es necesario
};

export const mealList = () => {
  return axios.get(REST_API_BASE_URL, { headers: headers });
};

export const getMealById = (id) => {
  return axios.get(REST_API_BASE_URL + "/" + id, {
    headers: headers,
  });
};

export const createMeal = (meal) => {
  return axios.post(REST_API_BASE_URL, meal, {
    headers: headers,
  });
};

export const updateMeal = (id, meal) => {
  return axios.put(REST_API_BASE_URL + "/" + id, meal, {
    headers: headers,
  });
};

export const deleteMeal = (id) => {
  return axios.delete(REST_API_BASE_URL + "/" + id, {
    headers: headers,
  });
};
