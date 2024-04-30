import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import Award from "../../assets/award.svg";
import Telescope from "../../assets/telescope.svg";
const Packages = () => {
  return (
    <>
      <div>
        <div className="flex justify-around p-20 ">
          <div className="mt-16 mr-40">
            <div className="w-20 h-2 mb-6 bg-dangerred "></div>
            <h1 className="text-3xl  mb-6 font-bold text-midnight">
              Approdable Packages
            </h1>
            <h5 className="w-64 text-xs mb-6 ">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </h5>
            <ButtonPrimary
              btnTitle={"Learn More"}
              btnStyle={{
                color: "#96bb7c",
                width: "30%",
                cursor: "pointer",
                fontSize: 18,
                font: "bold",
              }}
            />
          </div>
          <br />
          <br />
          <div className="flex flex-row	gap-5 ">
            <div className="w-64 h-80 flex flex-col justify-center items-center shadow-lg shadow-grey">
              <div className="mb-6 mr-32">
                <img src={Award} alt="" />
              </div>
              <h1 className="mr-16 mb-6 text-1x1 font-bold ">
                Certified Teacher
              </h1>
              <div className="w-12 h-1 mb-6 mr-36  bg-dangerred"></div>
              <h5 className=" text-xs  mr-16 w-32">
                The gradual accumulation of information about
              </h5>
            </div>
            <div className="w-64 h-80 flex flex-col justify-center items-center shadow-lg shadow-grey">
              <div className="mb-6 mr-32">
                <img src={Telescope} alt="" />
              </div>
              <h1 className="mr-16 mb-6 text-1x1 font-bold">
                Expert instruction
              </h1>
              <div className="w-12 h-1 mb-6 mr-36  bg-dangerred"></div>
              <h5 className=" text-xs  mr-16 w-32">
                The gradual accumulation of information about
              </h5>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <br />
      <br />
    </>
  );
};

export default Packages;

{
  /* <div className="w-64 h-80  shadow-lg shadow-grey 	">
            <div className="ml-7  ">
              <img src={Award} alt="" />
            </div>
            <h1>Certified Teacher</h1>
            <div className="w-24 h-2 mb-7 bg-dangerred "></div>
            <h5 className="w-2/5 text-xs  ">
              The gradual accumulation of information about
            </h5>
            </div> */
}
