import axios from "axios";
import { URL_API } from "../constants/env";

export const getUser = () => axios.get(`${URL_API}/api/user`);
export const createUser = (payload) =>
  axios.post(`${URL_API}/api/user`, payload);

export const createPost = (payload) =>
  axios.post(`${URL_API}/api/post`, payload);

export const uploadFileSingle = (payload) => {
  return axios({
    method: "post",
    url: `${URL_API}/api/upload`,
    data: payload,
    headers: {
      "x-device-id": "stuff",
      "Content-Type": "multipart/form-data",
    },
  });
};

export const uploadFileMultiple = (payload) => {
  return axios.post(`${URL_API}/api/uploads`, payload, {
    headers: {
      "x-device-id": "stuff",
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getTotalPost = () => axios.get(`${URL_API}/api/posts`);
export const getPostPublic = (payload) =>
  axios.post(`${URL_API}/api/posts/public`, payload);
export const getMyPostPending = (payload) =>
  axios.post(`${URL_API}/api/posts/pending`, payload);

export const getSavedList = (payload) =>
  axios.post(`${URL_API}/api/saved_lists`, payload);
export const savePost = (payload) =>
  axios.post(`${URL_API}/api/saved_post`, payload);
export const deleteSavedPost = (payload) =>
  axios.post(`${URL_API}/api/delete_post`, payload);

export const searchPost = ({
  priceRoom, // number
  areaRoom, // string
  address: { city, district, ward },
}) =>
  axios.get(
    `${URL_API}/api/search?p=${priceRoom}&area=${areaRoom}&city=${city}&dict=${district}&ward=${ward}`,
  );

export const getUserByID = (payload) => axios.post(`${URL_API}/api/getUser`, payload)
