export default function Account() {
  const role = localStorage.getItem("role");
  return (
    <div>
      <h2>Account</h2>
      <p>Bạn đã đăng nhập với quyền: {role}</p>
    </div>
  );
}
