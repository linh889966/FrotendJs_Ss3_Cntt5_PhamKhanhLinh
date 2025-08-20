
import React from "react";

type User = { id: number; name: string; age: number };

export default function Exercise03() {
  const [users] = React.useState<User[]>([
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Mary", age: 25 },
    { id: 3, name: "Jane", age: 20 },
  ]);

  const th: React.CSSProperties = {
    border: "1px solid #ccc",
    padding: "8px 12px",
    background: "#f7f7f7",
    textAlign: "left",
    fontWeight: 700,
  };
  const td: React.CSSProperties = {
    border: "1px solid #ccc",
    padding: "8px 12px",
  };

  return (
    <section style={{ maxWidth: 640, margin: "32px auto" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 12 }}>
        Users
      </h2>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={th}>Id</th>
            <th style={th}>Name</th>
            <th style={th}>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td style={td}>{u.id}</td>
              <td style={td}>{u.name}</td>
              <td style={td}>{u.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
