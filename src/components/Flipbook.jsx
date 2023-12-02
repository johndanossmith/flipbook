import { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { AiOutlineZoomIn, AiOutlineZoomOut } from "react-icons/ai";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../Modal.css";

function Flipbook(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handlePrev = () => {
    if (pageNumber > 1) {
      setPageNumber((pageNumber) => pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (pageNumber < numPages) {
      setPageNumber((pageNumber) => pageNumber + 1);
    }
  };

  const handleZoomOut = () => {
    //membatasi zoom
    if (pageScale > 0.9) {
      setPageScale((pageScale) => pageScale - 0.05);
    }
  };

  const handleZoomIn = () => {
    //membatasi zoom
    if (pageScale < 1.1) {
      setPageScale((pageScale) => pageScale + 0.05);
    }
  };

  function pagesList() {
    var pages = [];
    for (var i = pageNumber; i <= numPages; i++) {
      pages.push(
        <div>
          <Page width={500} pageNumber={i} scale={pageScale} />
        </div>
      );
    }
    return pages;
  }

  return (
    <Document
      file="./Sample.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
      className="modal-90w flex flex-col"
    >
      <HTMLFlipBook width={500} height={707}>
        {pagesList()}
      </HTMLFlipBook>
      <div className="bottom-0 self-center flex flex-row justify-between md:justify-around items-center mb-5 mt-3 z-50 w-full md:w-fit gap-0 md:gap-5 bg-slate-200 py-3 px-4 rounded-full drop-shadow-xl">
        <span
          onClick={handlePrev}
          className={`${
            pageNumber <= 1 ? "cursor-default" : "cursor-pointer"
          } bg-slate-600 select-none p-2 rounded-full`}
        >
          <BsChevronLeft className="text-white text-2xl" />
        </span>
        <span
          onClick={handleZoomOut}
          className={`${
            pageNumber <= 1 ? "cursor-default" : "cursor-pointer"
          } bg-slate-600 select-none p-2 rounded-full`}
        >
          <AiOutlineZoomOut className="text-white text-2xl" />
        </span>
        <span className="mx-3 text-center text-sm md:text-base">
          {numPages} Pages Book
        </span>
        <span
          onClick={handleZoomIn}
          className={`${
            pageNumber < numPages ? "cursor-pointer" : "cursor-default"
          } bg-slate-600 select-none p-2 rounded-full`}
        >
          <AiOutlineZoomIn className="text-white text-2xl" />
        </span>
        <span
          onClick={handleNext}
          className={`${
            pageNumber < numPages ? "cursor-pointer" : "cursor-default"
          } bg-slate-600 select-none p-2 rounded-full`}
        >
          <BsChevronRight className="text-white text-2xl" />
        </span>
      </div>
    </Document>
  );
}
export default Flipbook;
