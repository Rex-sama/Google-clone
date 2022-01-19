import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaImage } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { NavLink } from "react-router-dom";

function MenuTab() {
  return (
    <div className="grid grid-cols-6 gap-4  pb-0 items-center border-b border-gray-300">
      <div></div>
      <div className="col-start-2 col-span-4 ... flex items-center gap-2  pl-3">
        <div className=" cursor-pointer ">
          <NavLink
            className="flex items-center justify-center gap-2 p-2"
            exact
            activeClassName="text-blue-500 border-b-2 border-blue-500 ..."
            to="/"
          >
            <div>
              <BsSearch />
            </div>
            All
          </NavLink>
        </div>
        <div className="cursor-pointer ">
          <NavLink
            className="flex items-center justify-center gap-2 p-2"
            exact
            activeClassName="text-blue-500 border-b-2 border-blue-500 ..."
            to="/images"
          >
            <div>
              <FaImage />
            </div>
            Images
          </NavLink>
        </div>
        <div className=" cursor-pointer ">
          <NavLink
            className="flex items-center justify-center gap-2 p-2"
            exact
            activeClassName="text-blue-500 border-b-2 border-blue-500 ..."
            to="/news"
          >
            <div>
              <BiNews />
            </div>
            News
          </NavLink>
        </div>
        <div className="  cursor-pointer  ">
          <NavLink
            className="flex items-center justify-center gap-2 p-2"
            exact
            activeClassName="text-blue-500 border-b-2 border-blue-500 ..."
            to="/videos"
          >
            <div>
              <MdOutlineOndemandVideo />
            </div>
            Videos
          </NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default MenuTab;
