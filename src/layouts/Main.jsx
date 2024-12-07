import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/FooterComponent";
import Navbar from "../components/Navbar";

export default function Main() {
  return (
    <div className="dark:bg-slate-900">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <div className="container mx-auto px-3 pt-24 min-h-[calc(100vh-165px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
