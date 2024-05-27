import React from "react";
import { footer } from "../data/Data";
import logo from "../logo/logo-w.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="w-10/12 m-auto">
        <div className="flex justify-between pt-14 pb-14">
          <div className="text-gray-500 w-1/4">
            <Link to="/">
              <div className="mb-5">
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <p>
              Contact Us: Have questions or need assistance? Reach out to our
              friendly customer service team here. Shipping & Returns: Learn
              about our fast shipping options and easy return policy here. FAQ:
              Find answers to common questions here.
            </p>
          </div>
          {footer.map((val, index) => (
            <div className="text-gray-500" key={index}>
              <h1 className="text-2xl mb-5 text-white">{val.header}</h1>
              <p className="mt-200">{val.content2}</p>
              <p>{val.content3}</p>
              <p>{val.content4}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
