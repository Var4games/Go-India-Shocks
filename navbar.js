import React from "react";
import "./img.css";

function navbar() {
  return (
    <nav className="flex items-center justify-between bg-white-800 p-4">
      <div className="flex items-center">
        <div>
          <img
            src="https://www.goindiastocks.com/Content/assets/images/logewithname.png"
            alt="logo"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative flex pl-12 ml-40">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 px-4 py-2 rounded-md h-10 sm:h-12 md:w-80 shadow-inner "
          />
        </div>
      </div>
      <div className="flex items-center">
        <h1 className="text-black ml-4 sm:ml-80 rounded-t hover:border-indigo-300 p-3 ml-5 hidden sm:block">
          Contact Us
        </h1>
        <div className="flex">
          <button className="rounded-t border border-slate-300 hover:border-indigo-300 p-3 ml-5 hidden sm:block">
            SIGN UP
          </button>
          <button className="rounded-t border border-slate-300 hover:border-indigo-300 p-3 ml-5 hidden sm:block">
            SIGN IN
          </button>
          <img
            src="https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt="Profile"
            className="rounded-full w-8 h-8 flex items-center justify-center ml-5 sm:hidden"
          />
        </div>
      </div>
    </nav>
  );
}

export default navbar;
