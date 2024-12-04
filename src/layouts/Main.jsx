import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Main() {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
