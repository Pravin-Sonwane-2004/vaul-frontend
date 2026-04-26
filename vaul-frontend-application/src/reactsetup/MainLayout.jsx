import AppShell from "./AppShell";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}