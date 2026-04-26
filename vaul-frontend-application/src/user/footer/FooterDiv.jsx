import { Link } from "react-router-dom";
import "./footerDiv.css";

export default function FooterDiv() {
  return (
    <footer className="footer">
      <div>
        <strong>Vault Bank</strong>
        <p>Accounts, transfers, cards, and loans in one simple dashboard.</p>
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
}
