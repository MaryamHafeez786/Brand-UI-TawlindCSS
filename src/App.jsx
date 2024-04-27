import React from "react";
import ButtonPrimary from "./components/ButtonPrimary/ButtonPrimary";
import heroImg from "./assets/heroimg.svg";
const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold no-underline">Hello world!</h1>
      <ButtonPrimary btnTitle={"Login"} btnStyle={{ backgroundColor: "red" }} />
      <br />
      <ButtonPrimary
        btnTitle={"Join us"}
        btnStyle={{ backgroundColor: "green" }}
      />
      <ButtonPrimary
        btnTitle={"Learn more"}
        btnStyle={{ backgroundColor: "pink", width: "10%" }}
        imgSrc={heroImg}
      />
    </>
  );
};

export default App;

// import React from "react";
// import ButtonPrimary from "./components/ButtonPrimary/ButtonPrimary";

// const App = () => {
//   return (
//     <>
//       <h1 className="text-3xl font-bold no-underline">Hello world!</h1>
//       <ButtonPrimary
//         btnTitle={"Login"}
//         btnStyle={{ backgroundColor: "red", color: "white", borderColor: "green" }}
//       />
//       <br />
//       <ButtonPrimary btnTitle={"Join us"} />
//     </>
//   );
// };

// export default App;
