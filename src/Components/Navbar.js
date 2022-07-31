import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isShowLink, setIsShowLink] = useState(false);
  const activeNav = ({ isActive }) => (isActive ? "font-bold" : "");
  return (
    <main
      className={`bg-sky-700 w-full flex justify-around text-2xl text-white shadow-lg fixed overflow-hidden duration-300 z-10 ${
        isShowLink ? "h-[12.5rem]" : "h-[3.75rem]"
      }`}
    >
      <div className="container flex items-center justify-around h-[4rem] relative">
        <h1 className="font-bold">Course Outline</h1>

        <ul className="text-xl">
          <li>
            <NavLink to="/" className={activeNav}>
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Navbar;
