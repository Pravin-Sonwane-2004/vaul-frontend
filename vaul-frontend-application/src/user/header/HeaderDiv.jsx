import { Link } from "react-router-dom";
import "./headerDiv.css";
import logo from "../../assets/images/Bank-Logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "All Users", path: "/users" },
  { label: "Accounts", path: "/accounts" },
];

export default function HeaderDiv() {
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

      <div className="auth-links">
        <Link to="/login">Login</Link>
        <Link className="primary-link" to="/register">
          Register
        </Link>
      </div>
    </header>
  );
}