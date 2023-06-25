import React from "react";
import { Icons } from "../Icons/Icons";
import SearchBar from "../SearchBar/SearchBar";
import "./Navbar.scss";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/" className="navbar-item">
        <Icons.logo />
      </Link>
      <div className="navbar-item">
        <SearchBar />
      </div>
      <div className="navbar-item">
        <p>Sign In</p>
      </div>
    </div>
  );
};

export default Navbar;
