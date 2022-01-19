import React from "react";
import ReactPlayer from "react-player";

function VideosPanel({ data }) {
  console.log("video", data.results);
  return (
    <div className="flex flex-wrap justify-evenly ">
      {data?.results?.map((item, index) => {
        return (
          <div
            className="mb-10 border-2  shadow-2xl dark:text-gray-300  "
            key={index}
          >
            <div style={{ width: "230px" }}>
              <ReactPlayer
                url={item.additional_links[0].href}
                width={230}
                height={150}
              />
              <div className="px-2 pt-2 ">
                <a href={item.link}>
                  <p className="text-sm cursor-pointer  hover:underline truncate ...">
                    {item.cite.domain}
                  </p>
                  <p className="font-medium py-2 hover:text-blue-500 cursor-pointer">
                    {item.title}
                  </p>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VideosPanel;
