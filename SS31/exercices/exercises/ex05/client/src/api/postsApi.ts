import axiosClient from "./axiosClient";
import type { Post } from "../types/post";

const postsApi = {
  getAll: (params?: Record<string, unknown>) =>
    axiosClient.get<Post[]>("/posts", { params }),

  getById: (id: number | string) =>
    axiosClient.get<Post>(`/posts/${id}`),

  create: (data: Omit<Post, "id" | "publishedAt"> & { publishedAt?: string }) =>
    axiosClient.post<Post>("/posts", data),

  update: (id: number | string, data: Partial<Post>) =>
    axiosClient.put<Post>(`/posts/${id}`, data),

  patch: (id: number | string, data: Partial<Post>) =>
    axiosClient.patch<Post>(`/posts/${id}`, data),

  toggleBlock: (post: Post) => {
    const next = post.status === "published" ? "blocked" : "published";
    return axiosClient.patch<Post>(`/posts/${post.id}`, { status: next });
  }
};

export default postsApi;
