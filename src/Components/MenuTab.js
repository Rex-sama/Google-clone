import React from "react";
import { FcSearch } from "react-icons/fc";
import { FaImage } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { NavLink } from "react-router-dom";

function MenuTab() {
  return (
    <div className="grid grid-cols-6 gap-4  pb-0 items-center border-b-2 border-gray-300">
      <div></div>
      <div className="col-start-2 col-span-4 ... flex items-center gap-2  pl-3">
        <div className="flex items-center justify-center gap-2 py-2 px-2  cursor-pointer hover:bg-blue-200">
          <div>
            <FcSearch />
          </div>
          <NavLink to="/">All</NavLink>
        </div>
        <div className="flex items-center justify-center gap-2 py-2 px-2 cursor-pointer hover:bg-blue-200">
          <div>
            <FaImage />
          </div>
          <NavLink to="/images">Images</NavLink>
        </div>
        <div className="flex items-center justify-center gap-2 py-2 px-2 cursor-pointer hover:bg-blue-200">
          <div>
            <BiNews />
          </div>
          <NavLink to="/news">News</NavLink>
        </div>
        <div className="flex items-center justify-center gap-2 py-2 px-2 cursor-pointer hover:bg-blue-200 ">
          <div>
            <MdOutlineOndemandVideo />
          </div>
          <NavLink to="/videos">Videos</NavLink>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default MenuTab;
