import React from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#FFC8AC] h-12 px-20">
      <div className="flex gap-10 m-2">
        <h1>BrandName</h1>
        <ul className="flex gap-3">
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-12 m-2">
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
            marginRight: 20,
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
