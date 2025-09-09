import React from "react";

const Login: React.FC = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f9f9f9"
    }}>
      <div style={{
        background: "#fff",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "350px",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "20px" }}>Login account</h2>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>Your email</label>
          <input
            type="email"
            placeholder="name@company.com"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />
        </div>

        <div style={{ marginBottom: "15px", textAlign: "left" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="********"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px"
            }}
          />
        </div>

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Login an account
        </button>

        <p style={{ marginTop: "15px", fontSize: "14px" }}>
          Already have an account?{" "}
          <a href="#" style={{ color: "#2563eb", textDecoration: "none" }}>
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
