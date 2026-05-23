import { Link } from "react-router-dom";
import "./headerDiv.css";
import logo from "../../assets/images/Bank-Logo.png";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "All Users", path: "/users" },
  { label: "Accounts", path: "/accounts" },
];

export default function HeaderDiv() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // sync state with sessionStorage
    setIsLoggedIn(sessionStorage.getItem("isLoggedIn") === "true");

    const handleStorageChange = () => {
      setIsLoggedIn(sessionStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <header className="header">
      <Link className="brand" to="/">
        <img src={logo} alt="Vault logo" className="logo" />
        <strong>Vault</strong>
      </Link>

      <nav>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="nav-links">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout">
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link className="primary-link" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </header>
  );
}