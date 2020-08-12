import axios from "axios";

const baseURL = "http://localhost:5000/";
const api = axios.create({ baseURL });

export async function get(path) {
  return await api.get(path);
}

export async function deleteById(path, id) {
  return await api.delete(`${path}/${id}`);
}

export async function post(path, obj) {
  return await api.post(path, obj);
}

export async function put(path, obj) {
  return await api.put(`${path}/${obj.id}`, obj);
}
