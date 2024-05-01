import React from "react";
import Musicgirl from "../../assets/musicgirl.svg";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
const Video = () => {
  return (
    <>
      <div className="flex justify-around ">
        <div className="mt-32">
          <img src={Musicgirl} alt="" />
        </div>
        <div className="mt-72">
          <div className="w-20 h-2 mb-6 bg-dangerred "></div>
          <h1 className="text-3xl  mb-6 w-4/5 font-bold text-midnight">
            Video in Live Action
          </h1>
          <h5 className="w-64 text-xs mb-6 ">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </h5>
          <ButtonPrimary
            btnTitle={"Learn More"}
            btnStyle={{
              color: "#96bb7c",
              width: "35%",
              cursor: "pointer",
              fontSize: 18,
              font: "bold",
            }}
          />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Video;
