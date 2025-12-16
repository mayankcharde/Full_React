import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex py-4 items-center px-8 bg-cyan-900 justify-between">
      <h2 className="text-2xl font-bold">Mayank's</h2>
      <div className="flex gap-10">
        <Link className="text-lg font-medium" to="/">
          Home
        </Link>
        <Link className="text-lg font-medium" to="/about">
          About
        </Link>
        <Link className="text-lg font-medium" to="/courses">
          Courses
        </Link>
        <Link className="text-lg font-medium" to="/product">
          Product
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
