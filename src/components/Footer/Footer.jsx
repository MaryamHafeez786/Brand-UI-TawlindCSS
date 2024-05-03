import React from "react";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
import letter from "../../assets/letter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
const Footer = () => {
  return (
    <>
      <div className="flex justify-evenly mt-20">
        <div>
          <ul>
            <li className=" text-midnight font-bold mb-4">Company Info</li>
            <li className="  text-grey font-bold mb-2">About Us</li>
            <li className="  text-grey font-bold mb-2">Carrier</li>
            <li className="  text-grey font-bold mb-2">We are hiring</li>
            <li className="  text-grey font-bold mb-2">Blog</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className=" text-midnight font-bold mb-4">Legal</li>
            <li className="  text-grey font-bold mb-2">About Us</li>
            <li className="  text-grey font-bold mb-2">Carrier</li>
            <li className="  text-grey font-bold mb-2">We are hiring</li>
            <li className="  text-grey font-bold mb-2">Blog</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className=" text-midnight font-bold mb-4">Features</li>
            <li className="  text-grey font-bold mb-2">Business Marketing</li>
            <li className="  text-grey font-bold mb-2">User Analytic</li>
            <li className="  text-grey font-bold mb-2">Live Chat</li>
            <li className="  text-grey font-bold mb-2">Unlimited Support</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className=" text-midnight font-bold mb-4 ">Resources</li>
            <li className="  text-grey font-bold mb-2">IOS & Android</li>
            <li className="  text-grey font-bold mb-2">Watch a Demo</li>
            <li className="  text-grey font-bold mb-2 ">Customers</li>
            <li className="  text-grey font-bold mb-2">API</li>
          </ul>
        </div>
        <div>
          <p className=" text-midnight font-bold ml-5 mb-4">Get In Touch</p>
          <div className="flex gap-3 mb-3 ml-5">
            <img src={phone} alt="" />
            <p className="text-grey font-bold">(480) 555-0103 </p>
          </div>
          <div className="flex gap-3 mb-3 ml-5">
            <img src={location} alt="" />
            <p className="text-grey font-bold w-64 h-12">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
          </div>
          <div className="flex gap-3 mb-3 ml-5">
            <img src={letter} alt="" />
            <p className="text-grey  font-bold"> debra.holt@example.com</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-lightgreyw h-16 flex justify-between px-48 ">
        <p className="  text-grey font-bold mt-5">
          Made With Love By Figmaland All Right Reserved
        </p>
        <div className="flex w-6 h-6 gap-5  mt-5 ">
          <img src={facebook} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
