import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";

const Navbar = () => {
  const [visible,setvisible] = useState(false)
    return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/"><img src={assets.logo} className="w-36" alt="Logo" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
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
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 h-5" alt="Search" />
        <div className="group relative">
          <img
            className="w-5 h-5 cursor-pointer"
            src={assets.profile_icon}
            alt="Profile"
          />
          <div className="hidden group-hover:block absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">Profile</p>
              <p className="cursor-pointer hover:text-black">About</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 h-5" alt="Cart" />
          <p className="absolute right-[-5px] top-[-5px] w-4 text-center leading-4 bg-black text-white text-[8px] rounded-full">
            10
          </p>
        </Link>
        <img onClick={()=>setvisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden " alt="" />
      </div>
      {/* sidebar for small screnn */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
              <div className='flex items-center gap-4 p-3'>
                <img onClick={()=>setvisible(false)} src={assets.dropdown_icon} className='h-4 rotate-180 cursor-pointer' alt="" />
                <p className='cursor-pointer' onClick={()=>setvisible(false)}>Back</p>
              </div>
                <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='/' >Home</NavLink>
                <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='collection'>collection</NavLink>
                <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='about'>about</NavLink>
                <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6 border' to='contact'>contact</NavLink>
            </div>
      </div>
      </div>
  );
};

export default Navbar;