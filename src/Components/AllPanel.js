import React from "react";

function AllPanel({ data }) {
  console.log("all", data);
  return (
    <div className="px-10 ">
      {data?.results?.map((item, index) => {
        return (
          <div className=" my-4 mb-5 " key={index}>
            <a href={item.link}>
              <p
                className="text-base cursor-pointer"
                style={{ fontSize: "15px" }}
              >
                {item.cite.domain}
              </p>
              <p className="text-lg font-medium text-blue-800 visited:text-purple-600 hover:underline">
                {item.title}
              </p>
            </a>

            <div className="h-full ">
              <p
                className="text-gray-800 leading-5 "
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
