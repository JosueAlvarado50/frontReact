import axios from "axios";
const AUTH_REST_API_BASE_URL = "http://localhost:8081/api/auth";
const USERNAME = "admin";
const PASSWORD = "admin";
export const getToken = () => {};

const headers = {
  Authorization: localStorage.getItem("token"),
  "Content-Type": "application/json", // Asegúrate de establecer el tipo de contenido adecuado si es necesario
};
export function registerAPICall(registerObj) {
  return axios.post(AUTH_REST_API_BASE_URL + "/register", registerObj, {
    headers: headers,
  });
}
export function loginAPICall(registerObj) {
  return axios.post(AUTH_REST_API_BASE_URL + "/login", registerObj, {
    headers: headers,
  });
}
export const storedToken = (token) => {
  return localStorage.setItem("token", token);
};

export const saveLoggedInUser = (username, role) => {
  sessionStorage.setItem("authenticatedUser", username);
  sessionStorage.setItem("role", role);
};
export const isUserLoggedIn = () => {
  const username = sessionStorage.getItem("authenticatedUser");
  if (username == null) {
    return false;
  } else {
    return true;
  }
};
export const getLoggedInUser = () => {
  const username = sessionStorage.getItem("authenticatedUser");
  return username;
};
export const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload(false);
};
export const isAdminUser = () => {
  let role = sessionStorage.getItem("role");
  if (role != null && role === "ROLE_ADMIN") {
    return true;
  } else {
    return false;
  }
};
