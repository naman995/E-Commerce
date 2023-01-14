import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
 import logo from "../../assets/images/logo.png";

import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-auto h-auto bg-black">
      <div className=" text-white flex justify-between  tracking-wider mx-20 py-10 ">
        <div className="text-2xl">
          <div className=" ">
            <p className="text-[10px]">MENU</p>
            <p className="mt-8">Orginals</p>
            <p className="mt-2">Store</p>
            <p className="mt-2">About</p>
          </div>
          <div className="flex space-x-3 mt-10">
            <button>
              <AiOutlineInstagram />
            </button>
            <button>
              <AiOutlineYoutube />
            </button>
            <button>
              <FaTwitter />
            </button>
          </div>
        </div>
        <div className="text-2xl mx-10">
          <p className="text-[10px]">CATEGORIES</p>
          <p className="mt-8">Business attire</p>
          <p className="mt-2">Casual wear</p>
          <p className="mt-2">Formal wear</p>
          <p className="mt-2">Lingerie</p>
          <p className="mt-2">Sports wear</p>
        </div>
        <div className="text-2xl mx-10 mt-5">
          <img className="h-16 " src={logo} alt="" />
          <p className="mt-6">Career</p>
          <p className="mt-2">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
