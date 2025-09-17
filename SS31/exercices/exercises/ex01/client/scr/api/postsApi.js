import axiosClient from "./axiosClient";
const postsApi = {
  getAll: (params) => axiosClient.get("/posts", { params }),
  getById: (id) => axiosClient.get(`/posts/${id}`),
  create: (data) => axiosClient.post("/posts", data),
  update: (id, data) => axiosClient.put(`/posts/${id}`, data),
  remove: (id) => axiosClient.delete(`/posts/${id}`)
};
export default postsApi;
