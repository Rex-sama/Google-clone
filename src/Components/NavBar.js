import React from "react";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { FcSearch } from "react-icons/fc";
import { AiOutlineSearch } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Switch from "react-switch";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";

function NavBar(props) {
  const {
    onEntertext,
    search,
    setSearch,
    onClear,
    onSubmitSearch,
    changeMode,
    darkMode,
  } = props;
  return (
    <div className="dark:bg-gray-900 grid grid-cols-6 gap-4 px-3 pb-2 pt-5  items-center  ...  ">
      <div>
        <NavLink
          className="text-2xl font-medium flex justify-center items-cente cursor-pointer dark:text-white"
          exact
          to="/"
        >
          G
          <span className="mt-2">
            <FcSearch />
          </span>
          ggle
        </NavLink>
      </div>
      <div className="col-start-2 col-span-4 ...">
        <div className="w-7/12">
          <div className="flex items-center gap-4 px-4 py-1 box-border rounded-3xl border shadow-lg bg-white ... ">
            <div>
              <BsSearch />
            </div>
            <div className="w-full">
              <input
                type="text"
                className="w-full text-base py-1 box-border outline-none"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={onEntertext}
              />
            </div>
            <div className="cursor-pointer" onClick={onClear}>
              <GrClose />
            </div>
            <p className="w-px bg-gray-200 h-6"></p>
            <div
              className="text-blue-500 text-xl cursor-pointer"
              onClick={onSubmitSearch}
            >
              <AiOutlineSearch />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Switch
          checkedIcon={
            <div className="flex justify-center items-center h-full">
              <BsMoonStarsFill className="text-2xl text-white" />
            </div>
          }
          uncheckedIcon={
            <div className="flex justify-center items-center h-full">
              <BsSunFill className="text-2xl text-yellow-400" />
            </div>
          }
          onChange={changeMode}
          checked={darkMode}
          height={35}
          width={70}
          offColor="#0069af"
          onColor="#007fd4"
        />
      </div>
    </div>
  );
}

export default NavBar;
