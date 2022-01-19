function ImagesPanel({ data }) {
  console.log("image", data);
  return (
    <div className="flex flex-wrap justify-evenly py-4">
      {data?.image_results?.map((item, index) => {
        return (
          <div className="mb-7" key={index}>
            <div
              style={{ height: "250px" }}
              className="bg-gray-50 cursor-pointer flex items-center hover:bg-gray-100 hover:shadow-2xl"
            >
              <div className="bg-cover " style={{ width: "170px" }}>
                <img
                  src={item.image.src}
                  alt="thumbnails"
                  className="w-full h-full"
                />
              </div>
            </div>
            <a
              href={item.link.href}
              className="hover:underline"
              style={{ width: "170px" }}
            >
              <p
                className="text-gray-800  dark:text-gray-300 truncate ..."
                style={{ fontSize: "13px" }}
              >
                {item.link.title.split("  ")[0]}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 truncate ...">
                {item.link.title.split("  ")[1]}
              </p>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default ImagesPanel;
