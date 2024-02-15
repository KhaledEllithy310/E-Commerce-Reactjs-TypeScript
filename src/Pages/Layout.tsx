import { Outlet } from "react-router-dom";
import Navbar from "../Components/Ui/Navbar";
import Footer from "../Components/Ui/Footer";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <section className="">
        <Outlet />
      </section>
      <Footer />
    </>
  );
}
