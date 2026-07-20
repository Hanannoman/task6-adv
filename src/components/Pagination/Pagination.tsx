
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

interface PaginationProps {
  onPageChange: (page: number) => void;
  next:string;
  previous:string
}

const Pagination = ({ onPageChange ,next,previous }: PaginationProps) => {
  const { currentPage, pageNumbers } = useSelector((state: RootState) => state.blog);

  return (

    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-12 gap-4">
  
      <button 
        disabled={currentPage === 1} 
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 disabled:opacity-50 flex items-center gap-2 dark:text-[#EFEFEF]"
      >
        <img src="/assets/arrow-left.png" alt="" />
       {previous}
      </button>
      
      <div className="flex items-center">
        {pageNumbers.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            className={`px-4 py-2 rounded ${currentPage === page ? 'bg-[#F9F5FF] dark:text-black' : 'text-gray-500 dark:text-white'}`}
          >
            {page}
          </button>
        ))}
      </div>
       
      <button 
        disabled={currentPage === 10} 
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 disabled:opacity-50 flex items-center gap-2 dark:text-[#EFEFEF]"
      >
      {next}
        <img src="/assets/arrow-right.png" alt=" arrow" />
      </button>
    </div>
  );
};

export default Pagination;