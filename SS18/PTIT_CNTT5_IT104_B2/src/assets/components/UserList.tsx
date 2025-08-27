import React, { useMemo } from "react";

interface User {
  id: number;
  name: string;
  age: number;
}

const UserList: React.FC = () => {
  const users: User[] = [
    { id: 1, name: "Linh", age: 16 },
    { id: 2, name: "Huy", age: 20 },
    { id: 3, name: "Trang", age: 25 },
    { id: 4, name: "Nam", age: 17 },
  ];

  const filteredUsers = useMemo(() => {
    return users.filter(user => user.age > 18);
  }, [users]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách người dùng trên 18 tuổi</h2>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
