import { Footer } from "flowbite-react";
export default function FooterComponent() {
  return (
    <div className="">
      <Footer container className="bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://flowbite.com"
              src="/zakat.png"
              alt="Crowdcube Logo"
              name="Crowdcube"
            />
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
