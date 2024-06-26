import React from "react";

const ButtonPrimary = ({ btnTitle, btnStyle, imgSrc }) => {
  return (
    <>
      <span>
        <button className=" w-2 h-8" style={btnStyle}>
          {btnTitle}
        </button>
      </span>
    </>
  );
};

export default ButtonPrimary;
