import React from "react";

export type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type Props = { post: Post };

const label: React.CSSProperties = { fontWeight: 700, marginRight: 6 };
const line: React.CSSProperties = { margin: "6px 0" };

export default function DetailPost({ post }: Props) {
  return (
    <article style={{ padding: "8px 0" }}>
      <p style={line}><span style={label}>Id:</span>{post.id}</p>
      <p style={line}><span style={label}>Title:</span>{post.title}</p>
      <p style={line}><span style={label}>Content:</span>{post.content}</p>
      <p style={line}><span style={label}>Author:</span>{post.author}</p>
      <hr style={{ margin: "12px 0", borderColor: "#ddd" }} />
    </article>
  );
}
