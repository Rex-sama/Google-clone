import React from "react";

function AllPanel({ data }) {
  return (
    <div className="px-4 sm:px-7 md:px-10 lg:px-10  pb-10">
      {data?.results?.map((item, index) => {
        return (
          <div className=" my-4 mb-8 " key={index}>
            <a href={item.link}>
              <p
                className="text-base cursor-pointer dark:text-gray-300 truncate ..."
                style={{ fontSize: "15px" }}
              >
                {item.cite.domain}
              </p>
              <p className="text-lg font-medium text-blue-800 visited:text-purple-600 hover:underline dark:text-blue-400">
                {item.title}
              </p>
            </a>

            <div className="h-full ">
              <p
                className="text-gray-800 leading-5 dark:text-gray-300 text-justify tracking-[.25em]."
                style={{ fontSize: "15px" }}
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllPanel;
