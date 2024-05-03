import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#FFC8AC] h-24 px-20">
      <div className="flex gap-16 m-2">
        <h1 className="text-2xl font-bold">InspireEdu</h1>
        <ul className="flex gap-4 m-1 text-neutral-500 hover:text-lightgreyw ">
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-12 m-2">
        <ButtonPrimary btnTitle={"Login"} btnStyle={{ color: "#96bb7c" }} />
        {/* <br /> */}
        <div className="sm: text-sm">
          <ButtonPrimary
            btnTitle={"Join us"}
            btnStyle={{
              backgroundColor: "#96BB7C",
              width: "100%",
              color: "white",
              cursor: "pointer",
              borderRadius: 3,
              height: 40,
              padding: 17,
              paddingTop: 7,
              marginRight: 20,
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
