import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/">TechU</a>
      <div className="links">
        <a href="#">
          <MdOutlineAccountCircle />
        </a>
        <a href="#">
          <MdLanguage />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
