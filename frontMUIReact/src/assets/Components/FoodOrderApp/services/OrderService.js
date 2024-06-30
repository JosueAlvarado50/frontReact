import axios from "axios";
const REST_API_BASE_URL = "http://34.121.33.230:8081/api/food-order-app/order";

const headers = {
  Authorization: localStorage.getItem("token"),
  "Content-Type": "application/json", // Asegúrate de establecer el tipo de contenido adecuado si es necesario
};
export const OrderList = () => {
  return axios.get(REST_API_BASE_URL, { headers: headers });
};

export const getOrderById = (id) => {
  return axios.get(REST_API_BASE_URL + "/" + id, {
    headers: headers,
  });
};

export const createOrder = (order) => {
  return axios.post(REST_API_BASE_URL, order, {
    headers: headers,
  });
};

export const updateOrder = (id, order) => {
  return axios.put(REST_API_BASE_URL + "/" + id, order, {
    headers: headers,
  });
};

export const deleteOrder = (id) => {
  return axios.delete(REST_API_BASE_URL + "/" + id, {
    headers: headers,
  });
};
