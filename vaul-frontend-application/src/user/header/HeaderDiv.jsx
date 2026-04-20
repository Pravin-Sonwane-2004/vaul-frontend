import "./headerDiv.css";
import logo from "../../assets/images/Bank-Logo.png";

const navItems = [
  { label: "Home", href: "#home" },
  {label: "All-Users", href: "#get-all-users"},
  { label: "Accounts", href: "#accounts" },
  { label: "Transfers", href: "#transfers" },
  // { label: "Cards", href: "#cards" },
  { label: "Loans", href: "#loans" },
  { label: "Features", href: "#features" },
  // { label: "About", href: "#about" },
  // { label: "Contact", href: "#contact" },
];

export default function HeaderDiv() {
  return (
    <header className="header">
      <a className="brand" href="#home">
        <img src={logo} alt="Vault logo" className="logo" />
        <strong>Vault</strong>
      </a>

      <nav>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="auth-links">
        <a href="#login">Login</a>
        <a className="primary-link" href="#register">Register</a>
      </div>
    </header>
  );
}
