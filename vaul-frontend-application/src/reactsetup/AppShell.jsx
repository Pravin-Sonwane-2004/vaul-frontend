import HeaderDiv from '../user/header/headerDiv';

export default function AppShell({ children }) {
  return (
    
    <div className="flex min-h-screen flex-col">
      <HeaderDiv />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      {/* <FooterDiv /> */}
    </div>
  );
}
