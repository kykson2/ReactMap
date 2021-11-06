import React from "react";

import logo from "../images/icon1.png";
import SearchForm from "./SearchForm";

const Navbar = () => {
  return (
    // navbar goes here
      <div id="nav">
        <nav className="bg-gray-200">
          <div className="sm: max-w-sm md: max-w-md lg: max-w-6xl mx-auto ">
            <div className="flex justify-between">
              {/* logo */}
              <div className="flex space-x-4">
                <div id="logo">
                  <a href="/" className="flex items-center gap-1 py-2 px-3">
                    <img src={logo} alt="logo" className="h-6 w-6" />
                    <span className="font-bold">CPS</span>
                  </a>
                </div>
              </div>

              {/* search bar */}
              <SearchForm />
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
