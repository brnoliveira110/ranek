import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, post) {
    return axiosInstance.post(endpoint, post);
  },
  put(endpoint, post) {
    return axiosInstance.put(endpoint, post);
  },
  delete(endpoint) {
    return axiosInstance.delete(endpoint);
  },
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
