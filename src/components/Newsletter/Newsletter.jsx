import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
const Newsletter = () => {
  return (
    <>
      <div className="bg-pink h-96 flex justify-center mt-32 ">
        <div className="mt-20">
          <h5 className="text-green mb-6 ml-44">Newsletter</h5>
          <h1 className="text-3xl ml-24 mb-6 font-bold text-midnight">
            Watch our Courses
          </h1>
          <h5 className="w-80 text-xs ml-28">
            Problems trying to resolve the conflict between
          </h5>
          <h5 className=" text-xs ml-16">
            the two major realms of Classical physics: Newtonian mechanics
          </h5>

          <div className="flex  mt-9  justify-center">
            <input
              type="text "
              placeholder="Your Email"
              className="w-96  placeholder-grey text-gray-700 border border-lightgrey border-r-white rounded-bl rounded-tl		 px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
            <ButtonPrimary
              btnTitle={"Subscribe"}
              btnStyle={{
                backgroundColor: " #96BB7C",
                color: "#ffffff",
                width: "100%",
                border: " 2px solid #96BB7C",
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,
                padding: 6,
                paddingTop: 3,
                cursor: "pointer",
                fontSize: 18,
                font: "bold",
                height: 41,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
