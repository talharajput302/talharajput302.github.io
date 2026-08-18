import { Outlet } from "react-router-dom";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function Layout() {
  return (
    <div className="min-h-svh bg-background">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
