import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#FFC8AC] h-24 px-20">
      <div className="flex gap-16 m-2">
        <h1 className="text-2xl font-bold">InspireEdu</h1>
        <ul className="flex gap-4 m-1 text-neutral-500 ">
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-8 m-2">
        <ButtonPrimary btnTitle={"Login"} btnStyle={{ color: "#96bb7c" }} />
        {/* <br /> */}
        <ButtonPrimary
          btnTitle={"Join us"}
          btnStyle={{
            backgroundColor: "#96BB7C",
            width: "100%",
            color: "white",
            cursor: "pointer",
            borderRadius: 3,
            height: 35,
            padding: 17,
            paddingTop: 4,
            marginRight: 20,
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
