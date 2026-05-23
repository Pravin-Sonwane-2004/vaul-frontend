import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../api/service";

export default function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(API_ENDPOINTS.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials. Please try again.");
      }

      await response.json();

      sessionStorage.setItem("isLoggedIn", "true");

      // This triggers Header update
      window.dispatchEvent(new Event("storage"));

      navigate("/home");
    } catch (err) {
      setError(err.message || "Unable to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "320px",
          display: "grid",
          gap: "16px",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "30px",
            marginBottom: "5px",
          }}
        >
          Login
        </h2>

        {error && (
          <div
            style={{
              color: "red",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {error}
          </div>
        )}

        <div
          style={{
            display: "grid",
            gap: "6px",
          }}
        >
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleChange}
            required
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gap: "6px",
          }}
        >
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChange}
            required
            style={{
              padding: "8px",
              borderRadius: "6px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            justifySelf: "center",
            marginTop: "10px",
            width: "120px",
            padding: "8px",
            cursor: isLoading ? "not-allowed" : "pointer",
            borderRadius: "40px",
            border: "none",
          }}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
