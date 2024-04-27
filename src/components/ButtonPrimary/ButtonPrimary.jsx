import React from "react";

const ButtonPrimary = ({ btnTitle, btnStyle, imgSrc }) => {
  return (
    <>
      <button className="bg-blue-600 w-2 h-8 text-yellow-800" style={btnStyle}>
        {btnTitle}
      </button>
      {/* <img src={imgSrc} alt="" /> */}
    </>
  );
};

export default ButtonPrimary;

// import React from "react";

// const ButtonPrimary = ({ btnTitle, btnStyle }) => {
//   return (
//     <button
//       className="w-20 h-8 text-yellow-800"
//       style={{
//         backgroundColor: btnStyle?.backgroundColor || "bg-blue-600",
//         color: btnStyle?.color || "",
//         borderColor: btnStyle?.borderColor || "",
//         // Add more styles as needed
//       }}
//     >
//       {btnTitle}
//     </button>
//   );
// };

// export default ButtonPrimary;
