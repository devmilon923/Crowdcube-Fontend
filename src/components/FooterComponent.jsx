import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
export default function FooterComponent() {
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
            <Footer.LinkGroup>
              <Footer.Link>About</Footer.Link>
              <Footer.Link>Privacy Policy</Footer.Link>
              <Footer.Link>Licensing</Footer.Link>
              <Footer.Link>Contact</Footer.Link>
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
