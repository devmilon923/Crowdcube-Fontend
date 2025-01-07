import Aos from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../components/FooterComponent";
import Navbar from "../components/Navbar";
Aos.init({
  startEvent: "DOMContentLoaded",
  duration: 600,
  offset: 120,
  once: false,
});
export default function Main() {
  return (
    <div className="dark:bg-slate-900">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <div className="container overflow-hidden mx-auto px-3 pt-20 md:pt-24 min-h-[calc(100vh-165px)] pb-14">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
