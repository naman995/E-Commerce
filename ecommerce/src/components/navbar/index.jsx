import React from "react";
import logo from "../../assets/images/logo.png";
import { AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="bg-black text-white flex justify-between w-auto h-[72px]">
      {/* logo image */}
      <div className="flex text-[20px] items-center ml-20">
        <img src={logo} className="w-[33px] h-[40px]" alt="Logo" />
        <p className="ml-16">ORIGINAL'S</p>
        <p className="ml-10">STORE</p>
        <p className="ml-10">ABOUT</p>
      </div>
      <div className="flex items-center">
        <div className="flex border-[1px] border-gray-100 items-center px-4 mr-10 py-2">
          <AiOutlineSearch size={20} className="text-white mr-2" />
          <input
            className="bg-black w-[210px] placeholder:text-gray-600"
            placeholder="SEARCH MOONLIMTED.COM"
            type="text"
          />
        </div>
        <div className="flex text-white mr-16 text-[16px]">
          <AiOutlineHeart size={20} className="mr-5" />
          <BsHandbag size={20} className="mr-5" />
          <FaUser size={20} className="mr-5" />
          {/* <GrUserNew/> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
