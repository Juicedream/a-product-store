"use client";
import { paginate } from "@/app/utils/paginate";
import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function Pagination() {
  const totalPages = 9
  const [currentNumber, setCurrentNumber] = useState(1);
  const [pages, setPages] = useState(paginate(1, totalPages));
  // console.log(pages);
  const handleNextPage = () => {
    setCurrentNumber((prev) => prev + 3);
  }
  const handlePreviousPage = () => {
    setCurrentNumber((prev) => prev - 3);
  }
  useEffect(() => {
    function showPages () {
      setPages(paginate(currentNumber, totalPages));
    }
    showPages();
  }, [currentNumber])

  return (
    <div className="w-full flex items-center justify-end space-x-8 mt-8">
      <button
      title="Prev"
      onClick={handlePreviousPage}
      disabled={currentNumber === 1}
        className={clsx("p-4 rounded-md", 
          {"bg-white/42 hover:cursor-not-allowed hidden": currentNumber === 1},
          {"bg-white hover:bg-blue-400 hover:text-white hover:cursor-pointer block": currentNumber !== 1}
        )}
      >
        <ChevronLeft />
      </button>
      {pages?.map((page) => (
        <div
          className="p-4 bg-white rounded-md hover:cursor-pointer hover:bg-white/42"
         key={page}
        >
          {page}
        </div>
      ))}
      <button 
      title="Next"
      onClick={handleNextPage}
      disabled={pages?.includes(totalPages)}
      className={clsx("p-4 rounded-md ", 
          {"bg-white/42 hover:cursor-not-allowed hidden": pages?.includes(totalPages)},
          {"bg-white hover:bg-blue-400 hover:text-white hover:cursor-pointer block": !pages?.includes(totalPages)}
        )}>
        <ChevronRight />
      </button>
    </div>
  );
}
