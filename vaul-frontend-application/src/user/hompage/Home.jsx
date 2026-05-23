import "./home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">Secure Digital Banking</p>

          <h1>
            Welcome to <span>Vaul Bank</span>
          </h1>

          <p className="description">
            Manage users, accounts, and transactions with a simple and secure
            digital banking system.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">View Users</button>
          </div>
        </div>

        <div className="hero-card">
          <h3>Account Summary</h3>

          <p>Total Balance</p>
          <h2>₹3,13,525,000</h2>

          <div className="card-row">
            <span>Active Users</span>
            <strong>120+</strong>
          </div>

          <div className="card-row">
            <span>Status</span>
            <strong>Secure</strong>
          </div>
        </div>
      </section>
    </main>
  );
}