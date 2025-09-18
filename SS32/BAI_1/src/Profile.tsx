import { useSelector } from 'react-redux';

export default function Profile() {
  const { id, userName, gender, dateBirth, address } = useSelector(
    (state) => state.user
  );

  return (
    <div style={{ maxWidth: 520, lineHeight: 1.7 }}>
      <h2>Thông tin cá nhân</h2>
      <div>Id: <strong>{id}</strong></div>
      <div>Họ và tên: <strong>{userName}</strong></div>
      <div>Giới tính: <strong>{gender}</strong></div>
      <div>Ngày sinh: <strong>{dateBirth}</strong></div>
      <div>Địa chỉ: <strong>{address}</strong></div>
    </div>
  );
}
