import axios from "axios";

const baseURL = "http://localhost:5000/";
const api = axios.create({ baseURL });

export async function get(path) {
  console.log("api-call.js_get()");
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

export async function loginUserAxios(login) {
  return await api.post("login", login);
}

export async function registerUserAxios(register) {
  console.log("REGISTER::", register);
  return await api.post("register", register);
}
