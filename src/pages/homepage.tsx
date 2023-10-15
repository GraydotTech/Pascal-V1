import React, { useContext } from "react";
import useFetch from "../utilities/useFetch";
import SearchContext from "../context/searchContext";
import SearchResults from "../components/search-result";
import Navbar from "../components/navbar";
import {
  aboutUs,
  articles,
  blueShape,
  circlePic,
  cvReview,
  navigator,
  networking,
} from "../assets/assets.export";
import { features } from "./utils";
import Footer from "../components/footer";
import Input from "../components/input";

const Homepage: React.FC = () => {
  const { loading, error, data } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  const searchContext = useContext(SearchContext);
  let searchKey = searchContext?.searchKey;
  let newData = data?.filter((_: any, index: number) => index < 750);

  if (searchKey && newData) {
    return (
      <>
        <SearchResults data={newData} />
      </>
    );
  }
  return (
    <div className="">
      <div
        className=""
        style={{
          background:
            "linear-gradient(156deg, rgba(255, 255, 255, 0.62) 12.83%, rgba(0, 114, 219, 0.52) 70.63%)",
        }}
      >
        <Navbar />

        <div
          className="mt-16 p-8 py-6"
          style={{ height: "calc(100vh - 137px)" }}
        >
          <div className="flex items-center relative">
            <div className="w-1/2 mx-auto">
              <h1 className="text-7xl text-[#000] font-bold ">
                Your True and Only Career{" "}
                <span className="text-[#1C6EC0]">Companion</span>
              </h1>
              <p className="text-[#000] text-2xl mt-14 lg:w-[520px] mx-auto">
                Welcome to Pascal, your ultimate companion in your career
                journey!
              </p>
              <div className="flex gap-8 justify-center">
                <button className="bg-[#293CE1] text-white rounded-[30px] w-[228px] text-xl mt-14">
                  Get started
                </button>
                <button className="bg-transparent border border-[#0072DB] text-[#0072DB] rounded-[30px] w-[228px] text-xl mt-14">
                  Book a Demo
                </button>
              </div>
            </div>
            {/* <div className="">
            <img
              src={blueShape}
              alt=""
              className="absolute -top-52 -right-[129px] scale-75"
            />
            <img
              src={circlePic}
              alt=""
              className="absolute -top-48 right-8 scale-75"
            />
          </div> */}
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="py-[100px] flex justify-around items-center bg-[#F2F2F2]">
          <div className="w-[28%]">
            <img src={aboutUs} alt="" className="" />
          </div>
          <div className="text-black w-1/2 text-[28px] leading-[48px]">
            <h1 className=" mb-16 text-5xl font-semibold">About Us</h1>
            <p className="mb-12">
              At Pascal, we believe that everyone deserves a true and dedicated
              companion in their tech career journey.
            </p>
            <p>
              We know how daunting navigating the professional world can be, and
              that's why we've created a platform that serves as the only friend
              you'll ever need for your career.
            </p>
          </div>
        </div>

        <div className="bg-[#ECECEC] py-[100px] ">
          <h1 className="text-deepBB mb-16 text-5xl font-semibold">
            Pascal's Features
          </h1>
          <div className="text-white">
            <div className="grid grid-cols-2 col-span-2 px-10 gap-x-5 gap-y-28 ">
              <div
                className=" flex flex-col rounded-[20px] px-[30px] text-left h-[550px]"
                style={{
                  background:
                    "linear-gradient(180deg, #031A6B 0%, rgba(76, 112, 237, 0.60) 100%)",
                }}
              >
                <img
                  src={navigator}
                  alt=""
                  className="w-[200px] h-[200px] ml-auto"
                />
                <div className="">
                  <h1 className="text-4xl font-bold mb-11">
                    Conference Navigator
                  </h1>
                  <p className="text-2xl w-[300px] leading-[45px]">
                    {" "}
                    Stay informed about conferences tailored to your specific
                    career interests.{" "}
                  </p>
                </div>
              </div>
              <div
                className=" flex flex-col rounded-[20px] px-[30px] text-left h-[550px]"
                style={{
                  background:
                    "linear-gradient(61deg, #0072DB 25.55%, #CFE8FF 106.18%)",
                }}
              >
                <img
                  src={cvReview}
                  alt=""
                  className="w-[350px] h-[350px] ml-auto"
                />
                <div className="-mt-[200px]">
                  <h1 className="text-4xl font-bold mb-11">CV Review</h1>
                  <p className="text-2xl w-[350px] leading-[45px]">
                    Need expert eyes on your resume? Pascal offers a CV review
                    service to ensure your application shines.
                  </p>
                </div>
              </div>
              <div
                className=" flex flex-col rounded-[20px] px-[30px] text-left h-[550px]"
                style={{
                  background:
                    "linear-gradient(61deg, #0072DB 25.55%, #CFE8FF 106.18%)",
                }}
              >
                <img
                  src={networking}
                  alt=""
                  className="w-[200px] h-[200px] ml-auto"
                />
                <div className="">
                  <h1 className="text-4xl font-bold mb-11">
                    Exclusive Networking
                  </h1>
                  <p className="text-2xl w-[450px] leading-[45px]">
                    As a Pascal Premium member, you gain access to our unique
                    networking feature. Connect with others who share similar
                    career interests
                  </p>
                </div>
              </div>
              <div
                className=" flex flex-col rounded-[20px] px-[30px] text-left h-[550px]"
                style={{
                  background:
                    "linear-gradient(135deg, #D65108 26.72%, #ECBFA7 92.24%)",
                }}
              >
                <img
                  src={articles}
                  alt=""
                  className="w-[200px] h-[200px] ml-auto"
                />
                <div className="">
                  <h1 className="text-4xl font-bold mb-11">
                    Curated Article Suggestions
                  </h1>
                  <p className="text-2xl w-[450px] leading-[45px]">
                    Stay ahead in your industry with Pascal's curated article
                    suggestions. Get access to handpicked content that directly
                    relates to your career niche, so you can stay informed and
                    grow your expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F2F2F2] py-[100px] text-left">
          <div className="w-[62%] ml-auto text-black">
            <h1 className="text-5xl font-semibold mb-3">Get in touch</h1>
            <p className="text-2xl ">
              We are here for you, how can we help you today?
            </p>
          </div>
          <div className="h-[400px] w-[80%] mx-auto mt-16 flex text-black">
            <div className="bg-[#0072DB] h-full w-[36%]"></div>
            <div className="bg-white h-full w-[64%]">
              <div className="flex flex-col gap-8 w-4/5 mx-auto h-full justify-center">
                <Input type="text" name="first_name" placeholder="First name" />
                <Input type="email" name="email" placeholder="Email Address" />
                <textarea
                  className="flex min-h-[120px] w-full rounded-md border border-base_gray_100 bg-[#EFEFEF] px-3 py-2 text-sm ring-offset-background placeholder:text-[#9A9A9A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message here"
                  name=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
