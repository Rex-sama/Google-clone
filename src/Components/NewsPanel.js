import React, { useEffect, useState } from "react";
import Paginate from "./Paginate";

function NewsPanel({ data }) {
  const date = new Date(2022, 0, 17, 19, 30, 0, 0, 17, 0);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(data?.entries?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data?.entries?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.entries?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  console.log(date.getDay());

  return (
    <div className="px-10 ">
      {currentItems &&
        currentItems?.map((item) => {
          return (
            <div
              className="border my-4 px-3 py-3 cursor-pointer rounded-lg"
              key={item.id}
            >
              <a href={item.link}>
                <p
                  className="text-gray-600 my-1 hover:underline truncate ..."
                  style={{ fontSize: "14px" }}
                >
                  {item.link}
                </p>
                <p className="font-medium text-lg my-1 hover:text-blue-500 cursor-pointer ">
                  {item.title}
                </p>
              </a>

              <p style={{ fontSize: "14px" }}>{item.published}</p>
            </div>
          );
        })}
      <Paginate pageCount={pageCount} handlePageClick={handlePageClick} />
    </div>
  );
}

export default NewsPanel;
