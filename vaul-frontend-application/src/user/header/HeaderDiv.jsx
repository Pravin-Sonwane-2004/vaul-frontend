import "./headerDiv.css";
import logo from "../../assets/images/Bank-Logo.png";

export default function HeaderDiv() {
  return (
    <header className="header-parent">

      {/* LEFT: Logo + Name */}
      <div className="logo-section">
        <img src={logo} alt="Bank Logo" className="logo" />
        <h1>Vault</h1>
      </div>

      {/* CENTER: Navigation */}
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      {/* RIGHT: Profile */}
      <div className="profile-section">
        <img 
          src="https://via.placeholder.com/40" 
          alt="Profile" 
          className="profile"
        />
      </div>

    </header>
  );
}