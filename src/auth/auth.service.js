import * as jwt from "jsonwebtoken";

const accessToken = "token";

export function logOut() {
  localStorage.clear(accessToken);
  window.location = "/login";
}

export function getAccessToken() {
  return localStorage.getItem(accessToken);
}

export function getUserEmailFromToken() {
  const token = localStorage.getItem(accessToken);
  if (!token) return false;

  const decoded = jwt.decode(token);

  return decoded.email;
}

export function isTokenFromLocalStorageValid() {
  const token = localStorage.getItem(accessToken);
  if (!token) return false;
  const decoded = jwt.decode(token);

  const expiresAt = decoded.exp * 1000;
  const dateNow = Date.now();

  return dateNow <= expiresAt;
}

export default {
  logOut,
  isTokenFromLocalStorageValid,
};
