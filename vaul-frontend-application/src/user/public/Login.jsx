import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../api/service";

export default function Login() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
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
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });

      if (!response.ok) {
        throw new Error("Invalid credentials. Please try again.");
      }

      const data = await response.json();

      // Example: Save token for future authenticated requests
      // localStorage.setItem("token", data.token);

      navigate("/home");
      
    } catch (err) {
      setError(err.message || "Unable to connect to the server.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "60px" }}>
      
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", width: "300px" }}>
        <h2 style={{ textAlign: "center", fontSize: "30px", marginBottom: "10px" }}>
          Login
        </h2>

        {error && <div style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>{error}</div>}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
            style={{ marginTop: "10px", width: "90px" ,padding: "4px", cursor: isLoading ? "not-allowed" : "pointer" , borderRadius : "40px", alignItems:"center", textAlign:"center", marginLeft:"100px"}}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

      </form>
    </div>
  );
}