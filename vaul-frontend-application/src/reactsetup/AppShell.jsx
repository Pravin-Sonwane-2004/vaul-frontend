import HeaderDiv from "../user/header/HeaderDiv";
import FooterDiv from "../user/footer/FooterDiv";

export default function AppShell({ children }) {
  return (
    <div className="app-shell">
      
      <HeaderDiv />
      <main id="main-content" className="app-main">
        {children}
      </main>
      <FooterDiv />
    </div>
  );
}
