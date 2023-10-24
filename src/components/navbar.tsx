import { logo } from "../assets/assets.export";
import { scrollToSection } from "../pages/utils";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between items-center p-8 py-6">
      <h1 className="text-headers">
        <img src={logo} alt="logo" className="" />
      </h1>

      <div className="navlist text-[#000] text-xl font-semibold flex gap-24 items-center">
        <span className="cursor-pointer">Home</span>
        <span
          className="cursor-pointer"
          onClick={() => scrollToSection("features")}
        >
          Features
        </span>
        <span
          className="cursor-pointer"
          onClick={() => scrollToSection("about-us")}
        >
          About us
        </span>
        <span
          className="cursor-pointer"
          onClick={() => scrollToSection("reviews")}
        >
          Reviews
        </span>
      </div>
      <div className="buttons flex gap-3">
        <button className="bg-[#293CE1] text-white rounded-[30px] w-[228px] text-xl">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
