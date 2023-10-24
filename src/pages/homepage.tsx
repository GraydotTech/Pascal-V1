import React from "react";
import Navbar from "../components/navbar";
import {
  aboutUs,
  articles,
  blueStar,
  cvReview,
  navigator,
  networking,
} from "../assets/assets.export";
import fullStar from "../assets/Vector (4).svg";
import halfStar from "../assets/Vector (5).svg";
import Footer from "../components/footer";
import Input from "../components/input";
import { testimonials } from "./utils";

const Homepage: React.FC = () => {
 
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
          </div>
        </div>
      </div>
      <div className=" " id="about-us">
        <div className="py-[100px] flex justify-around items-center bg-[#F2F2F2]">
          <div className="w-[28%]">
            <img src={aboutUs} alt="" className="" />
          </div>
          <div className="text-black w-1/2 text-[28px] leading-[48px]">
            <h1 className=" mb-16 text-5xl font-semibold">About Us</h1>
            <p className="mb-12">
              At Pascal, we understand the unique challenges you face in your
              tech career journey, and we're here to be your unwavering
              companion.
            </p>
            <p>
              Navigating the professional world can be intimidating, and that's
              where we come in. Our platform is designed to be your lifelong
              friend throughout your career.
            </p>
          </div>
        </div>

        <div className="bg-[#ECECEC] py-[100px] " id="features">
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
                  className="w-[200px] h-[200px] ml-auto"
                />
                <div className="">
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
        <div className="" id="reviews">
          <div className="flex justify-center items-center gap-10 bg-white py-14 text-[#1C6EC0]">
            <img src={blueStar} alt="" />
            <h1 className="text-4xl font-semibold">
              What people are saying about us
            </h1>
            <img src={blueStar} alt="" />
          </div>
          <div className="bg-[#DEEEFF] text-black flex gap-7 px-5 pt-14 pb-10 justify-center">
            {testimonials.map((testimony) => (
              <>
                <div className="flex flex-col justify-between items-center w-[30%]">
                  <div className="">
                    <img
                      src={testimony.img}
                      alt=""
                      className="h-[200px] mx-auto mb-10"
                    />
                    <h3 className="text-3xl font-semibold mb-4">
                      {testimony.name}
                    </h3>
                    <p className="text-2xl font-normal">{testimony.desc}</p>
                  </div>
                  <div className="mt-8 flex gap-1">
                    {testimony.star.map((_) => (
                      <img src={fullStar} alt="" />
                    ))}
                    <img src={halfStar} alt="" />
                  </div>
                </div>
              </>
            ))}
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
            <div className="bg-[#0072DB] h-full w-[20%]"></div>
            <div className="bg-white h-full w-[64%]">
              <div className="flex flex-col gap-8 w-4/5 mx-auto h-full justify-center">
                <Input type="text" name="first_name" placeholder="First name" />
                <Input type="email" name="email" placeholder="Email Address" />
                <textarea
                  className="flex min-h-[120px] w-full rounded-md border border-base_gray_100 bg-[#EFEFEF] px-3 py-2 text-sm ring-offset-background placeholder:text-[#9A9A9A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Your message here"
                  name=""
                />
                <button className="bg-[#0072DB] text-white">
                  Send Message
                </button>
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
