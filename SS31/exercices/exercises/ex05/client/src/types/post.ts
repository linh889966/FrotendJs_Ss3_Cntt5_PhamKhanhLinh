export type PostStatus = "draft" | "published" | "blocked";

export interface Post {
  id: number;
  title: string;
  thumbnail?: string;
  content: string;
  status: PostStatus;
  publishedAt: string; // YYYY-MM-DD
}
