import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer bg-[#ECECEC] text-black text-left">
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-0 py-[46px] px-8 sm:px-[68px] items-start justify-between">
        <div className="sm:w-1/4 text-xl">
          <p className="font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim v...
          </p>
        </div>
        <div className="footer-lists flex justify-between flex-wrap sm:flex-nowrap gap-2 lg:gap-8 xl:w-[60%]">
          {footer_links.map((footer, i) => (
            <div
              className={`footer-list text-xl w-[45%] ${
                i == 2 ? "md:w-full" : "md:w-[60%]"
              }  sm:w-auto`}
            >
              <h1 className="footer-header mb-7 text-2xl font-semibold">
                {footer.heading}
              </h1>
              {footer.links.map((link) => {
                return (
                  <>
                    <Link
                      to={`/${link.link}`}
                      className={`block text-black mb-4`}
                    >
                      {link.name}
                    </Link>
                  </>
                );
              })}
            </div>
          ))}
          <div className={`footer-list text-xl w-[45%] md:w-full sm:w-auto`}>
            <h1 className="footer-header mb-7 text-2xl font-semibold">
              OUR ADDRESS
            </h1>
            <p className="block text-black mb-4 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            {/* <button className="bg-[#293CE1] text-white rounded-[30px] w-[228px] text-xl">
              Contact Us
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const footer_links = [
  {
    heading: "MENU",
    links: [
      { name: "Home", link: "home" },
      { name: "Features", link: "features" },
      { name: "About us", link: "about-us" },
      { name: "Reviews", link: "reviews" },
    ],
  },
  {
    heading: "LINKS",
    links: [
      { name: "Terms of use", link: "terms-of-use" },
      { name: "Privacy Policy", link: "privacy-policy" },
      { name: "Cookie Policy", link: "cookie-policy" },
      { name: "Terms & Conditions", link: "t-and-c" },
    ],
  },
];
