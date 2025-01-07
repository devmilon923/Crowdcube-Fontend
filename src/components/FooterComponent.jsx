import { Footer } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contextApi/AuthContext";
export default function FooterComponent() {
  const { user } = useContext(AuthContext);
  return (
    <div className="">
      <Footer container className="bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Link
              to={"/"}
              className="text-2xl font-bold flex gap-2 items-center"
            >
              <p className="mt-3 text-slate-800 dark:text-white">
                <span className="text-green-600">Crowd</span>cube
              </p>
            </Link>
            <Footer.LinkGroup className="gap-5">
              <Link to="/about-us">About us</Link>

              <Link to="/faq">FAQ</Link>
              <Link to="/campaign/all">All Campaigns</Link>
              {user ? (
                <Link to="/campaign/me">My Campaigns</Link>
              ) : (
                <Link to="/auth/login">Get start</Link>
              )}
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright
            href="#"
            by="Crowdcube"
            year={new Date().getFullYear()}
          />
        </div>
      </Footer>
    </div>
  );
}
