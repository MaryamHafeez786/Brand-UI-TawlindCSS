import React from "react";
import heroimg from "../../assets/heroimg1.svg";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
const Hero = () => {
  return (
    <>
      <div className="flex justify-between px-20  bg-[#FFC8AC] h-682">
        <div className="w-30 ">
          <h4 className="text-green mt-20 mb-12">Welcome</h4>
          <h1 className=" text-6xl font-bold text-midnight">
            Best Learing Opportunities
          </h1>
          <h2 className=" text-grey text-2xl  w-80 mb-9 mt-9 ">
            Our goal is to make online education work for everyone
          </h2>
          <div className="flex gap-3 lg:mb-8 sm:mb-8 ">
            <ButtonPrimary
              btnTitle={"Join us"}
              btnStyle={{
                backgroundColor: "#96BB7C",
                width: "100%",
                color: "white",
                cursor: "pointer",
                fontSize: 18,
                font: "bold",
                height: 40,
                padding: 25,
                paddingTop: 4,
                borderRadius: 3,
              }}
            />
            <ButtonPrimary
              btnTitle={"Learn More"}
              btnStyle={{
                border: " 2px solid #96BB7C",
                width: "100%",
                color: "#96BB7C",
                cursor: "pointer",
                borderRadius: 3,
                fontSize: 18,
                font: "bold",
                height: 40,
                padding: 25,
                paddingTop: 3,
              }}
            />
          </div>
        </div>
        <div>
          <img src={heroimg} alt="" className="lg:mb-0 sm:flex-wrap" />
        </div>
      </div>
      <br />
      <br />
      <br />
    </>
  );
};
export default Hero;
