import axios from "axios";

const URL_API = "http://localhost:5000";

export const getUser = () => axios.get(`${URL_API}/api/user`);
export const createUser = (payload) =>
  axios.post(`${URL_API}/api/user`, payload);

export const createPost = (payload) =>
  axios.post(`${URL_API}/api/post`, payload);
