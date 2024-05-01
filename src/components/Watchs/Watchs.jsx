import React from "react";

const Watchs = () => {
  return (
    <>
      <div className="mt-24">
        <div className="ml-24k">
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
      <div>
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
      </div>
    </>
  );
};

export default Watchs;
