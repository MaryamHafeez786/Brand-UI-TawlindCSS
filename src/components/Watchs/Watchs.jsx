import React from "react";
import girltestimonal from "../../assets/girltestimonals.svg";
import boytestimonal from "../../assets/boytestimonal.svg";
const Watchs = () => {
  return (
    <>
      <div className="mt-24">
        <div className="ml-24">
          <h5 className="text-green mb-6">Testimonials</h5>
          <h1 className="text-3xl  mb-7 font-bold text-midnight">
            Watch our Courses
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
      {/* <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="flex justify-around mt-10">
        <div>
          <img src={girltestimonal} alt="" className="rounded-full ml-11" />

          <h4 className="w-56 mt-7 text-xs">
            Slate helps you see how many more days you need to work to reach
            your financial
          </h4>
          <h4 className="ml-8 text-xs"> goal for the month and year.</h4>
          <div className="rating gap-2  mt-4 ml-14 ">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow w-4 h-4"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2  bg-yellow w-4 h-4"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow w-4 h-4"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow w-4 h-4"
              checked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 border-yellow border-4 bg-white w-4 h-4		"
            />
          </div>
          <h4 className=" mt-2 font-bold ml-16">Regina Miles</h4>
          <h4 className="mt-2 ml-20 text-grey font-bold">Designer</h4>
        </div>
        <div>
          <img src={boytestimonal} alt="" className="rounded-full ml-11" />

          <h4 className="w-56 mt-7 text-xs">
            Slate helps you see how many more days you need to work to reach
            your financial
          </h4>
          <h4 className="ml-8 text-xs"> goal for the month and year.</h4>

          <div className="rating gap-2  mt-4 ml-14">
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow w-4 h-4"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2  bg-yellow w-4 h-4"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow w-4 h-4"
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 bg-yellow w-4 h-4"
              checked
            />
            <input
              type="radio"
              name="rating-4"
              className="mask mask-star-2 border-yellow border-4 bg-white	w-4 h-4	"
            />
          </div>
          <h4 className=" mt-2 ml-16 font-bold">Regina Miles</h4>
          <h4 className=" mt-2 ml-20 text-grey font-bold">Designer</h4>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Watchs;
