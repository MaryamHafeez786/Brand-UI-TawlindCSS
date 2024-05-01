import React from "react";
import colorpencil from "../../assets/colorpencil.svg";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import like from "../../assets/like.svg";
import basket from "../../assets/basket.svg";
import eye from "../../assets/eye.svg";
import rating from "../../assets/Frame 4.svg";
import arrow from "../../assets/arrow.svg";
import vector from "../../assets/vector.svg";
import cool from "../../assets/cool.svg";
import ant from "../../assets/ant.svg";
import rightarrow from "../../assets/rightarrow.svg";
const Sales = () => {
  const myStyle = {
    backgroundImage: `url(${colorpencil})`,
    marginTop: "-70px",
    fontSize: "20px",
    width: "209px",
    height: "402px",
    backgroundRepeat: "no-repeat",
    marginLeft: "30px",
  };
  return (
    <>
      <div>
        <div className="ml-20">
          <h5 className="text-green mb-6">Practice Advice</h5>
          <h1 className="text-3xl  mb-7 font-bold text-midnight">
            Approdable Packages
          </h1>
          <h5 className="w-80 text-xs ">
            Problems trying to resolve the conflict between
          </h5>
          <h5 className="w-96 text-xs ">
            the two major realms of Classical physics: Newtonian mechanics
          </h5>
        </div>
      </div>

      {/* card 1 */}
      <div className="flex justify-evenly mt-32">
        <div style={{ display: "flex", gap: 15 }}>
          <div className="mt-8">
            <div style={myStyle}>
              <ButtonPrimary
                btnTitle={"Sale"}
                btnStyle={{
                  backgroundColor: "#E21B1B",
                  color: "#ffffff",
                  cursor: "pointer",
                  width: "30%",
                  font: "bold",
                  fontSize: 22,
                  height: 35,
                  margin: 23,
                  borderRadius: 3,
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: 272,
                }}
              >
                <img src={like} alt="" />
                <img src={basket} alt="" />
                <img src={eye} alt="" />
              </div>
            </div>
          </div>

          {/* card 1 text */}
          <div className="">
            <div
              style={{
                display: "flex",
                marginLeft: 20,
                gap: 50,
              }}
            >
              <h1 className="text-green  ">2,769 online courses</h1>
              <img src={rating} alt="" />
            </div>
            <h4 className="text-lg font-bold mb-3 mt-4 ml-5">
              Watch our Courses
            </h4>
            <h4 className="w-52 ml-5">We focus on ergonomics and</h4>
            <h4 className="w-60 mb-3 ml-5">
              meeting you where you work. It's only a keystroke away.
            </h4>
            <div className="flex gap-3 mb-3 ml-5">
              <img src={arrow} alt="" />
              <h4 className="text-grey">15 Sales</h4>
            </div>
            <div className=" flex gap-2 mt-4 ml-5">
              <h3 className="text-mutedgrey">$16.48 </h3>
              <h3 className="text-orange"> $6.48</h3>
            </div>
            <div className="flex">
              <div className=" flex gap-2 mt-4 ml-5">
                <img src={cool} alt="" />
                <h4 className="text-grey">15 Sales</h4>
              </div>
              <div className=" flex gap-2 mt-4 ml-5">
                <img src={vector} alt="" />
                <h4 className="text-grey">15 Sales</h4>
              </div>
              <div className=" flex gap-2 mt-4 ml-5">
                <img src={ant} alt="" />
                <h4 className="text-grey">15 Sales</h4>
              </div>
            </div>
            <button className="flex p-5 gap-4">
              <ButtonPrimary
                btnTitle={"Learn More"}
                btnStyle={{
                  color: "#96bb7c",
                  cursor: "pointer",
                  fontSize: 18,
                  font: "bold",
                  border: " 2px solid #96BB7C",
                  borderRadius: 20,
                  height: 40,
                  width: "170%",
                }}
              />
              <div className="mt-3 ml-5">
                <img src={rightarrow} alt="" />
              </div>
            </button>
          </div>
        </div>

        {/* card 2 */}
        <div style={{ display: "flex", gap: 15 }}>
          <div className="mt-8">
            <div style={myStyle}>
              <ButtonPrimary
                btnTitle={"Sale"}
                btnStyle={{
                  backgroundColor: "#E21B1B",
                  color: "#ffffff",
                  cursor: "pointer",
                  width: "30%",
                  font: "bold",
                  fontSize: 22,
                  height: 35,
                  margin: 23,
                  borderRadius: 3,
                }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginTop: 272,
                }}
              >
                <img src={like} alt="" />
                <img src={basket} alt="" />
                <img src={eye} alt="" />
              </div>
            </div>
          </div>

          {/* card 2 text */}
          <div className="">
            <div
              style={{
                display: "flex",
                marginLeft: 20,
                gap: 50,
              }}
            >
              <h1 className="text-green  ">2,769 online courses</h1>
              <img src={rating} alt="" />
            </div>
            <h4 className="text-lg font-bold mb-3 mt-4 ml-5">
              Watch our Courses
            </h4>
            <h4 className="w-52 ml-5">We focus on ergonomics and</h4>
            <h4 className="w-60 mb-3 ml-5">
              meeting you where you work. It's only a keystroke away.
            </h4>
            <div className="flex gap-3 mb-3 ml-5">
              <img src={arrow} alt="" />
              <h4 className="text-grey">15 Sales</h4>
            </div>
            <div className=" flex gap-2 mt-4 ml-5">
              <h3 className="text-mutedgrey">$16.48 </h3>
              <h3 className="text-orange"> $6.48</h3>
            </div>
            <div className="flex">
              <div className=" flex gap-2 mt-4 ml-5">
                <img src={cool} alt="" />
                <h4 className="text-grey">15 Sales</h4>
              </div>
              <div className=" flex gap-2 mt-4 ml-5">
                <img src={vector} alt="" />
                <h4 className="text-grey">15 Sales</h4>
              </div>
              <div className=" flex gap-2 mt-4 ml-5">
                <img src={ant} alt="" />
                <h4 className="text-grey">15 Sales</h4>
              </div>
            </div>
            <button className="flex p-5 gap-4">
              <ButtonPrimary
                btnTitle={"Learn More"}
                btnStyle={{
                  color: "#96bb7c",
                  cursor: "pointer",
                  fontSize: 18,
                  font: "bold",
                  border: " 2px solid #96BB7C",
                  borderRadius: 20,
                  height: 40,
                  width: "170%",
                }}
              />
              <div className="mt-3 ml-5">
                <img src={rightarrow} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
