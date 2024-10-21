import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
