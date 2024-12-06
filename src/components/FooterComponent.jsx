import { Footer } from "flowbite-react";
export default function FooterComponent() {
  return (
    <div className="">
      <Footer container className="bg-gray-50">
        <div className="container mx-auto text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </div>
      </Footer>
    </div>
  );
}
