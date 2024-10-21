import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";

export default function Layout() {
  return (
    <div className="flex flex-col mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
