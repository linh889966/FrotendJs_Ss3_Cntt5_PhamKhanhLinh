export default function ResultBox({ email }) {
  return (
    <pre>
      {email
        ? `Sau khi submit: { email: '${email}' }`
        : "Trước khi submit: { email: '' }"}
    </pre>
  );
}
