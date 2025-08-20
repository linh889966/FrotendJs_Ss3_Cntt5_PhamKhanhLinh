import React from "react";
import DetailPost, { Post } from "./DetailPost";

export default function ListPost() {
  const [posts] = React.useState<Post[]>([
    {
      id: 1,
      title: "Tại sao nên học ReactJS",
      content: "Học ReactJS để đi làm",
      author: "David",
    },
    {
      id: 2,
      title: "Props trong ReactJS",
      content: "Props giúp truyền dữ liệu từ component cha xuống component con",
      author: "Linda",
    },
    {
      id: 3,
      title: "State trong ReactJS là gì?",
      content: "State giúp lưu trữ trạng thái dữ liệu bên trong một component",
      author: "Alex",
    },
  ]);

  return (
    <section style={{ maxWidth: 760, margin: "24px auto", lineHeight: 1.6 }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>
        Danh sách bài viết
      </h2>

      {posts.map((p) => (
        <DetailPost key={p.id} post={p} />
      ))}
    </section>
  );
}
