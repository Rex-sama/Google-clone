import React from "react";
import { BsSearch } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

function NavBar({ onEntertext, search, setSearch ,onClear}) {
  return (
    <div className="grid grid-cols-6 gap-4 px-3 py-2 pb-0  items-center">
      <div>Goggle</div>
      <div className="col-start-2 col-span-4 ...">
        <div className="w-6/12">
          <div className="flex items-center gap-4 px-4 py-1 box-border rounded-3xl border border-indigo-600 bg-white ... ">
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
          </div>
        </div>
      </div>
      <div>3</div>
    </div>
  );
}

export default NavBar;
