import "./footerDiv.css";

export default function FooterDiv() {
  return (
    <footer className="footer">
      <div>
        <strong>Vault Bank</strong>
        <p>Accounts, transfers, cards, and loans in one simple dashboard.</p>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>
    </footer>
  );
}
