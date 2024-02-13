import { Outlet } from "react-router-dom";
import Navbar from "../Components/Ui/Navbar";

export default function RootLayout() {
  return (
    <div>
      <Navbar />
      <section className="pl-6">
        <Outlet />
      </section>
    </div>
  );
}
