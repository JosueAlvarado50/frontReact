import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8081/api/departments";
const USERNAME = "admin";
const PASSWORD = "admin";

const headers = {
  Authorization: localStorage.getItem("token"),
  "Content-Type": "application/json", // Asegúrate de establecer el tipo de contenido adecuado si es necesario
};

export const departmentList = () => {
  return axios.get(REST_API_BASE_URL, { headers: headers });
};

export const getDepartmentById = (id) => {
  return axios.get(REST_API_BASE_URL + "/" + id, {
    headers: headers,
  });
};

export const createDepartment = (department) => {
  return axios.post(REST_API_BASE_URL, department, {
    headers: headers,
  });
};

export const updateDepartment = (id, department) => {
  return axios.put(REST_API_BASE_URL + "/" + id, department, {
    headers: headers,
  });
};

export const deleteDepartment = (id) => {
  return axios.delete(REST_API_BASE_URL + "/" + id, {
    headers: headers,
  });
};
