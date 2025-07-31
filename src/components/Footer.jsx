import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <Logo />
          <p className="mt-5 w-full md:w-2/3 text-gray-600">
            We’re here to make shopping effortless, stylish, and fun. From
            must-have collections to everyday essentials, we’ve got what you
            need—when you need it. Follow us on Instagram, Facebook, and Twitter
            for style inspo, flash sales, and more.
          </p>
        </div>
        <div>
          <p className=" text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className=" text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+977-98-765-43210</li>
            <li>contact@nfsshop.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ nfsshop.netlify.app - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
