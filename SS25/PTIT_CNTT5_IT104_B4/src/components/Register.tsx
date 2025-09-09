import React from "react";

const Register: React.FC = () => {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f7f7fb"
    }}>
      <div style={{
        width: 360,
        background: "#fff",
        borderRadius: 10,
        padding: 28,
        boxShadow: "0 8px 24px rgba(0,0,0,.08)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: "#111827", color: "#fff",
            display: "grid", placeItems: "center", fontWeight: 700
          }}>
            🔒
          </div>
          <h2 style={{ margin: 0 }}>Create account</h2>
        </div>

        <label style={{ fontSize: 14 }}>Your email</label>
        <input
          type="email"
          placeholder="name@company.com"
          style={{
            width: "100%", padding: "10px 12px", marginTop: 6, marginBottom: 14,
            border: "1px solid #e5e7eb", borderRadius: 6, outlineColor: "#2563eb"
          }}
        />

        <label style={{ fontSize: 14 }}>Password</label>
        <input
          type="password"
          placeholder="********"
          style={{
            width: "100%", padding: "10px 12px", marginTop: 6, marginBottom: 14,
            border: "1px solid #e5e7eb", borderRadius: 6, outlineColor: "#2563eb"
          }}
        />

        <label style={{ fontSize: 14 }}>Confirm password</label>
        <input
          type="password"
          placeholder="********"
          style={{
            width: "100%", padding: "10px 12px", marginTop: 6, marginBottom: 18,
            border: "1px solid #e5e7eb", borderRadius: 6, outlineColor: "#2563eb"
          }}
        />

        <button
          type="button"
          style={{
            width: "100%", padding: "11px 12px",
            background: "#2563eb", color: "#fff",
            border: "none", borderRadius: 6, fontWeight: 600, cursor: "pointer"
          }}
        >
          Create an account
        </button>

        <p style={{ fontSize: 13, color: "#6b7280", marginTop: 14, textAlign: "center" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#2563eb", textDecoration: "none" }}>
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
