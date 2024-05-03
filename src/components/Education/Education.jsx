import React from "react";
import img1 from "../../assets/img1.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import img2 from "../../assets/img2.svg";
import img3 from "../../assets/img3.svg";
import img4 from "../../assets/img4.svg";

const Education = () => {
  return (
    <>
      <div className="mt-48">
        <div className="ml-24">
          <h5 className="text-green mb-6">Team</h5>
          <h1 className="text-3xl  mb-7 font-bold text-midnight">
            Get Quality Education
          </h1>
          <h5 className="w-80 text-xs ">
            Problems trying to resolve the conflict between
          </h5>
          <h5 className="w-96 text-xs ">
            the two major realms of Classical physics: Newtonian mechanics
          </h5>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-evenly mx-20">
        {/* card 1 */}
        <div className="card w-60 bg-base-100 shadow-xl ml-5 h-96">
          <figure>
            <img src={img1} alt="" className=" rounded-ee-none h-60	" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title font-bold ">Julian Jameson</h2>
            <h4>Profession</h4>
            <div className="flex gap-3 mt-2">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="card w-60 bg-base-100 shadow-xl ml-5 h-96">
          <figure>
            <img src={img2} alt="" className=" rounded-ee-none h-60	" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title font-bold ">Julian Jameson</h2>
            <h4>Profession</h4>
            <div className="flex  gap-3 mt-2">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        {/* card 3 */}

        <div className="card w-60 bg-base-100 shadow-xl ml-5 h-96">
          <figure>
            <img src={img3} alt="" className=" rounded-ee-none h-60	" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title font-bold">Julian Jameson</h2>
            <h4 className="">Profession</h4>
            <div className="flex  gap-3 mt-2">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div className="card w-60 bg-base-100 shadow-xl ml-5 h-96">
          <figure>
            <img src={img4} alt="" className=" rounded-ee-none h-60	" />
          </figure>
          <div className="card-body items-center text-center ">
            <h2 className="card-title ">Julian Jameson</h2>
            <h4>Profession</h4>
            <div className="flex  gap-3 mt-2">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
