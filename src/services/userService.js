import axios from "../axios";

export const handleLogin = (email, password) => {
  return axios.post("/api/login", { email, password });
};

export const getAllCode = (typeInput) => {
  return axios.get(`/api/getAllCode?type=${typeInput}`);
};

export const userService = {
  handleLogin,
  getAllCode,
};
