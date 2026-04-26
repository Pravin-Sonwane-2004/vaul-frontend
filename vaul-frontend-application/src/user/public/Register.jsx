import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
   
  const nev = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await sendData();
  };

  async function sendData() {
    const userData = {
      name: formData.name,
      email: formData.email,
        phone: formData.phone,
      password: formData.password
    };

    const response = await fetch("API_ENDPOINTS.BASE_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      alert("Registration failed");
      return;
    }

    alert("User registered successfully");
    nev("/login");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <strong style={{ textAlign: "center", fontSize: "30px" }}>
        Register Page
      </strong>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label>Email: </label>
          <input name="email" value={formData.email} onChange={handleChange} />
        </div>
      
         <div>
            <label htmlFor="">Phone No: </label>
               <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
               />
         </div>

        <div>
          <label>Password: </label>
          <input name="password" type="password" value={formData.password} onChange={handleChange} />
        </div>

        <div>
          <label>Confirm Password: </label>
          <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange} />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}