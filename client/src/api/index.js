import axios from "axios";

const URL_API = "http://localhost:5000";

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
