import ReactPaginate from "react-paginate";

function Paginate({ pageCount, handlePageClick }) {
  return (
    <div className="flex justify-center pb-8 ">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        className=" flex items-center flex-wrap paginate-bar dark:text-gray-300"
      />
    </div>
  );
}

export default Paginate;
