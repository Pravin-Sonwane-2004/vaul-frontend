import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser();
  };

  async function loginUser() {
    try {
      const response = await fetch(API_ENDPOINTS.LOGIN , {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(loginData)
      });

      if (!response.ok) {
        alert("Invalid credentials");
        return;
      }

      const data = await response.json();

      // future use (JWT token etc)
      console.log("Login Success:", data);

      alert("Login Successful");

      // redirect after login
      navigate("/home");

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  }

  return (
    <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
      
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Email: </label>
          <input
            name="email"
            type="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            name="password"
            type="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Login</button>

      </form>
    </div>
  );
}