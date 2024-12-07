import Banner from "../components/Banner";
import FundraisingStep from "../components/FundraisingStep";
import WhyStart from "../components/WhyStart";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="py-14">
        <FundraisingStep />
      </div>
      <div className="py-14">
        <WhyStart />
      </div>
    </>
  );
}
