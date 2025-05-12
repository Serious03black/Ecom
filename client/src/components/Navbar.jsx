import React from "react";
import { Link,NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
const Navbar = () => {
  return (
    <div className="flex item-center  justify-between py-5 font-medium">
      <img src={assets.logo} className="w-36" alt="" />
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1 ">
          <p>Home</p>
          <hr className="w-14 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-14 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-14 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-14 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex item-center h-10 w-10 gap-6">
        <img src={assets.search_icon} />

        <div className="group relative">
          <img
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />
          <div
            className="group-hover:block hidden absolute dropdown-menu right-0 pt-4"
            src={assets.profile_icon}
            alt=""
          />
          <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
            <p className="cursor-pointer hover:text-black">Profile</p>
            <p className="cursor-pointer hover:text-black">About</p>
            <p className="cursor-pointer hover:text-black">Logout</p>
          </div>
        <Link to='/cart' className=''>
            <img src={assets.cart_icon} className="w-5 h-5 " alt="" />
            <p className='absolute right-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square text-[8px]'></p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
