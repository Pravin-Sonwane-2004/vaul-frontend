import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_ENDPOINTS } from "../../api/service";


export default function Register() {
  const navigate = useNavigate(); // Standard naming convention

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  // Added states for better UX
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // 1. Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setIsLoading(true);
    
    // 2. API Call with Try/Catch
    try {
      const userData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      };

      // NOTE: Make sure API_ENDPOINTS.BASE_URL is a variable/import, not a string literal
      const response = await fetch(API_ENDPOINTS.REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error("Registration failed. Please try again.");
      }

      alert("User registered successfully");
      navigate("/login");
      
    } catch (err) {
      setError(err.message || "A network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "10px" }}>
      <h2 style={{ textAlign: "center", fontSize: "30px", marginBottom: "20px" }}>
        Register Page
      </h2>

      {/* Replaced invalid <th>/<tr> tags with a clean CSS flexbox column layout */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        
        {/* Inline Error Display */}
        {error && <div style={{ color: "red", textAlign: "center", fontWeight: "bold" }}>{error}</div>}

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Name: </label>
          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="email">Email: </label>
          {/* Changed to type="email" for built-in browser validation */}
          <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="phone">Phone No: </label>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="password">Password: </label>
          <input id="password" name="password" type="password" value={formData.password} onChange={handleChange} required />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input id="confirmPassword" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} required />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
          style={{ marginTop: "10px", width: "90px" ,padding: "4px", cursor: isLoading ? "not-allowed" : "pointer" , borderRadius : "40px", alignItems:"center", textAlign:"center", marginLeft:"100px"}}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
}