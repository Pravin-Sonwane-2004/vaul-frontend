import { useNavigate } from "react-router-dom";

export default function GetStarted() {
      const navigate = useNavigate();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #020617, #0f172a, #1e3a8a)",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <section
        style={{
          maxWidth: "600px",
          padding: "35px",
          textAlign: "center",
          borderRadius: "16px",
          background: "rgba(255, 255, 255, 0.12)",
        }}
      >
        <h1>Get Started with Vaul Bank</h1>

        <p style={{ color: "#dbeafe", lineHeight: "1.6" }}>
          Choose your next action to manage users, accounts, and banking
          services.
        </p>

        <div style={{ marginTop: "25px" }}>
          <button style={buttonStyle}>Create User</button>
          <button style={buttonStyle}>View Users</button>
          <button style={buttonStyle}>Manage Accounts</button>
        </div>
      </section>
    </main>
  );
}
//css for button
const buttonStyle = {
  padding: "11px 18px",
  margin: "6px",
  border: "none",
  borderRadius: "7px",
  background: "#3b82f6",
  color: "white",
  cursor: "pointer",
};